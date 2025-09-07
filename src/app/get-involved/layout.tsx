import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get Involved - Join Our Mission | Dhidib Foundation",
  description: "Join Dhidib Foundation in empowering youth and building communities. Volunteer, donate, or become a partner to make a positive impact in your community.",
};

export default function GetInvolvedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}