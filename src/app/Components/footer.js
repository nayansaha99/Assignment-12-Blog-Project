import Link from "next/link";

export default function Footer(){
    return (
      <footer class="footer p-2 bg-base-300 text-base-content absolute inset-x-0 bottom-10 h-8">
        <div>
          <span class="footer-title">Services</span>
          <Link href="/"class="link link-hover">Home</Link>
          <Link  href="/about"class="link link-hover">About</Link>
          <Link href="/blog" class="link link-hover">Blog</Link>
          <Link href="/contact" class="link link-hover">Contact</Link>
        </div>
        <div>
        </div>
        <div>
        </div>
      </footer>
    );
        
    
}