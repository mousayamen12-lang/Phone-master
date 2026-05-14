import { useState, useMemo } from "react";

// ── قاعدة البيانات الشاملة (2024 - 2026) ──
const PHONES_DB = [
  // 2024
  { id: 101, name: "iPhone 16 Pro Max", brand: "Apple", priceUSD: 1199, year: 2024, screen: '6.7"', cpu: "A18 Pro", battery: "4441", charging: "30", image: "📱", focus: "camera" },
  { id: 102, name: "Galaxy S24 Ultra", brand: "Samsung", priceUSD: 1249, year: 2024, screen: '6.8"', cpu: "SD 8 Gen 3", battery: "5000", charging: "45", image: "📲", focus: "performance" },
  { id: 103, name: "Pixel 9 Pro", brand: "Google", priceUSD: 999, year: 2024, screen: '6.3"', cpu: "Tensor G4", battery: "4700", charging: "27", image: "🤖", focus: "camera" },
  
  // 2025
  { id: 201, name: "iPhone 17 Pro Max", brand: "Apple", priceUSD: 1299, year: 2025, screen: '6.9"', cpu: "A19 Pro", battery: "4850", charging: "45", image: "📱", focus: "camera", new: true },
  { id: 202, name: "Galaxy S25 Ultra", brand: "Samsung", priceUSD: 1299, year: 2025, screen: '6.8"', cpu: "SD 8 Gen 4", battery: "5000", charging: "65", image: "📲", focus: "performance", new: true },
  { id: 203, name: "Xiaomi 15 Ultra", brand: "Xiaomi", priceUSD: 950, year: 2025, screen: '6.7"', cpu: "SD 8 Gen 4", battery: "5300", charging: "90", image: "🔥", focus: "battery", new: true },
  
  // 2026 (تسريبات وتوقعات)
  { id: 301, name: "iPhone 18 Pro Max", brand: "Apple", priceUSD: 1399, year: 2026, screen: '6.9"', cpu: "A20 Pro", battery: "5100", charging: "60", image: "🚀", focus: "camera", leaked: true },
  { id: 302, name: "Galaxy S26 Ultra", brand: "Samsung", priceUSD: 1349, year: 2026, screen: '6.9"', cpu: "SD 8 Gen 5", battery: "5500", charging: "80", image: "🌌", focus: "performance", leaked: true },
  { id: 303, name: "Honor Magic 8 Pro
