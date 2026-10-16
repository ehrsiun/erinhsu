import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CategoryPage from "@/components/CategoryPage";
import { categories, type Category } from "@/content/projects";

type Props = { params: Promise<{ category: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return categories.map((category) => ({ category }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  return { title: `${category} · Erin Hsu` };
}

export default async function Page({ params }: Props) {
  const { category } = await params;
  if (!categories.includes(category as Category)) notFound();
  return <CategoryPage category={category as Category} />;
}
