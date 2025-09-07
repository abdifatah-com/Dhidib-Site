import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - Get in Touch | Dhidib Foundation",
  description: "Contact Dhidib Foundation for inquiries, partnerships, or to learn more about our youth empowerment programs. We're here to help and connect with our community.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}