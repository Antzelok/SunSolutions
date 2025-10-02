"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types";

function SolarCard({ product }: { product: Product }) {
  return (
    <Card className="w-60 m-4 hover:scale-105 transition-transform duration-200">
      <CardHeader className="flex flex-col items-center text-center">
        <CardTitle className="font-mono text-lg">{product.name}</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center">
        <Image
          src={product.image}
          alt={product.name}
          width={150}
          height={120}
          className="object-contain mb-4"
        />
        <CardDescription className="text-sm text-gray-600 mb-4">
          {product.description}
        </CardDescription>
        <Link href={product.link}>
          <Button className="w-full">Περισσότερα...</Button>
        </Link>
      </CardContent>
    </Card>
  );
}

export default SolarCard;
