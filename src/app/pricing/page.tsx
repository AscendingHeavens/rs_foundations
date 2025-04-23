"use client";

import { basePricing, addOns, smartBundles } from "@/constants";
import React from "react";
import PricingCard from "@/components/pricing/PricingCard";


const PricingPage = () => {
  const baseItems: PricingCardItem[] = basePricing.map((b) => ({
    title: b.projectType,
    price: b.priceRange.inr,
    usd: b.priceRange.usd,
    details: b.details,
  }));

  const addOnItems: PricingCardItem[] = addOns.map((a) => ({
    title: a.service,
    price: a.pricing.inr,
    usd: a.pricing.usd,
    details: a.details,
  }));

  const bundleItems: PricingCardItem[] = smartBundles.map((s) => ({
    title: s.bundle,
    price: s.discountedPrice.inr,
    usd: s.discountedPrice.usd,
    details: s.includes,
  }));

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0f0f0f] to-[#1a1a1a] p-8 text-white">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold mb-16 text-center">
          🚀 Ascending Heavens Pricing
        </h1>
        <PricingCard title="💰 Base Pricing by Project Type" items={baseItems} />
        <PricingCard title="💎 Add-ons & Upsells" items={addOnItems} />
        <PricingCard title="🚀 Smart Bundles" items={bundleItems} />
      </div>
    </div>
  );
};

export default PricingPage;