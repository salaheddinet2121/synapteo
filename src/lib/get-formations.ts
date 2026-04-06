import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

export type FormationFrontmatter = {
  title: string;
  subtitle?: string;
  description: string;
  duration: string;
  format: string;
  audience: string;
  price?: string;
  priceMeta?: string;
  primaryCtaLabel?: string;
  primaryCtaHref?: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
  order?: number;
  featured?: boolean;
};

export type FormationListItem = FormationFrontmatter & {
  slug: string;
};

export type FormationSectionModule = {
  title: string;
  items: string[];
};

export type FormationDetail = FormationListItem & {
  content: string;
  objectif?: string;
  pointsCles: string[];
  programme: FormationSectionModule[];
  methodesPedagogiques: string[];
  modalitesEvaluation: string[];
  prerequisTechniques: string[];
};

const FORMATIONS_DIR = path.join(process.cwd(), 'src/content/formations');

export function getAllFormationSlugs(): string[] {
  try {
    return fs
      .readdirSync(FORMATIONS_DIR)
      .filter((file) => file.endsWith('.mdx') || file.endsWith('.md'))
      .map((file) => file.replace(/\.(md|mdx)$/, ''));
  } catch {
    return [];
  }
}

export function getAllFormations(): FormationListItem[] {
  return getAllFormationSlugs()
    .map((slug) => {
      const { data } = readFormationFile(slug);

      return {
        slug,
        ...(data as FormationFrontmatter),
      };
    })
    .sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
}

export function getFormation(slug: string): FormationDetail | null {
  try {
    const { data, content } = readFormationFile(slug);
    const frontmatter = data as FormationFrontmatter;

    return {
      slug,
      ...frontmatter,
      content,
      objectif: getFirstParagraph(getSection(content, 'Objectif')),
      pointsCles: getBullets(getSection(content, 'Points clés')),
      programme: getProgramme(getSection(content, 'Programme')),
      methodesPedagogiques: getBulletsOrParagraphs(
        getSection(content, 'Méthodes pédagogiques'),
      ),
      modalitesEvaluation: getBulletsOrParagraphs(
        getSection(content, "Modalités d\u2019évaluation"),
      ),
      prerequisTechniques: getBulletsOrParagraphs(
        getSection(content, 'Prérequis techniques'),
      ),
    };
  } catch (error: unknown) {
    if ((error as NodeJS.ErrnoException)?.code === 'ENOENT') return null;
    throw error;
  }
}

function readFormationFile(slug: string) {
  const filePathMdx = path.join(FORMATIONS_DIR, `${slug}.mdx`);
  const filePathMd = path.join(FORMATIONS_DIR, `${slug}.md`);
  const filePath = fs.existsSync(filePathMdx) ? filePathMdx : filePathMd;
  const raw = fs.readFileSync(filePath, 'utf8');
  return matter(raw);
}

function getSection(content: string, title: string): string {
  const parts = content.split(/^## /m);
  const part = parts.find((p) => p.startsWith(title));
  if (!part) return '';
  const body = part.slice(part.indexOf('\n') + 1);
  return body.trim();
}

function getFirstParagraph(section: string): string | undefined {
  return (
    section
      .split('\n\n')
      .map((part) => part.trim())
      .find((part) => part && !part.startsWith('-') && !part.startsWith('###')) ||
    undefined
  );
}

function getBullets(section: string): string[] {
  return section
    .split('\n')
    .map((line) => line.trim())
    .filter((line) => line.startsWith('- '))
    .map((line) => line.replace(/^- /, '').trim());
}

function getBulletsOrParagraphs(section: string): string[] {
  const bullets = getBullets(section);
  if (bullets.length > 0) return bullets;

  return section
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean);
}

function getProgramme(section: string): FormationSectionModule[] {
  const parts = section.split(/^### /m).map((part) => part.trim()).filter(Boolean);

  return parts.map((part) => {
    const [titleLine, ...rest] = part.split('\n');
    const items = rest
      .map((line) => line.trim())
      .filter((line) => line.startsWith('- '))
      .map((line) => line.replace(/^- /, '').trim());

    return {
      title: titleLine.trim(),
      items,
    };
  });
}
