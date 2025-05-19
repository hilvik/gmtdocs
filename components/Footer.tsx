import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-sm font-semibold text-gray-500 tracking-wider uppercase">
              Documentation
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link href="#client" className="text-base text-gray-600 hover:text-gray-900">
                  Client Side
                </Link>
              </li>
              <li>
                <Link href="#therapist" className="text-base text-gray-600 hover:text-gray-900">
                  Therapist Side
                </Link>
              </li>
              <li>
                <Link href="#admin" className="text-base text-gray-600 hover:text-gray-900">
                  Admin Side
                </Link>
              </li>
              <li>
                <Link href="#homepage" className="text-base text-gray-600 hover:text-gray-900">
                  Homepage
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-500 tracking-wider uppercase">
              Resources
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link href="#" className="text-base text-gray-600 hover:text-gray-900">
                  API Reference
                </Link>
              </li>
              <li>
                <Link href="#" className="text-base text-gray-600 hover:text-gray-900">
                  Guides
                </Link>
              </li>
              <li>
                <Link href="#" className="text-base text-gray-600 hover:text-gray-900">
                  Examples
                </Link>
              </li>
              <li>
                <Link href="#" className="text-base text-gray-600 hover:text-gray-900">
                  Help Center
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-500 tracking-wider uppercase">
              Company
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link href="#" className="text-base text-gray-600 hover:text-gray-900">
                  About
                </Link>
              </li>
              <li>
                <Link href="#" className="text-base text-gray-600 hover:text-gray-900">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-base text-gray-600 hover:text-gray-900">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-200 pt-8">
          <p className="text-base text-gray-500 text-center">
            &copy; {new Date().getFullYear()} Get Me Therapy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}