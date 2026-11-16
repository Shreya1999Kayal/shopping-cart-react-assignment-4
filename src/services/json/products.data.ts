import type { Product } from "../../types/interface/cart.interface";

// static product list - no backend needed for the cart, this file plays the role of the product api
export const ProductData: Product[] = [
  { id: 1, name: "Wireless Headphones", description: "Over-ear, noise reduction, 30 hour battery.", price: 260, category: "Audio", image: { url: "/images/products/headphones.jpg" } },
  { id: 2, name: "Bluetooth Speaker", description: "Portable, water resistant, deep bass.", price: 11170, category: "Audio", image: { url: "/images/products/speaker.jpg" } },
  { id: 3, name: "Mechanical Keyboard", description: "Compact layout with tactile switches.", price: 50000, category: "Computer", image: { url: "/images/products/keyboard.jpg" } },
  { id: 4, name: "Gaming Mouse", description: "Lightweight, 6 buttons, adjustable DPI.", price: 5525, category: "Computer", image: { url: "/images/products/mouse.jpg" } },
  { id: 5, name: "USB-C Hub", description: "7 in 1 hub with HDMI, USB 3.0 and card reader.", price: 3160, category: "Accessories", image: { url: "/images/products/usb-hub.jpg" } },
  { id: 6, name: "Laptop Stand", description: "Foldable aluminium stand, six height levels.", price: 1200, category: "Accessories", image: { url: "/images/products/laptop-stand.jpg" } },
  { id: 7, name: "Smart Watch", description: "Heart rate, sleep tracking and 7 day battery.", price: 154320, category: "Wearable", image: { url: "/images/products/smart-watch.jpg" } },
  { id: 8, name: "Power Bank 20000mAh", description: "Fast charging with two USB ports.", price: 64120, category: "Accessories", image: { url: "/images/products/power-bank.jpg" } },
];