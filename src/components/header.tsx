"use client";

import { Button } from "@/components/ui/button";
import { ExternalLinkIcon, Globe, SettingsIcon } from "lucide-react";
import { useLocale } from "next-intl";
import Link from "next/link";
import { useEffect, useState } from "react";
import { LanguageSwitcher } from "./language-switcher";
import { Logo } from "./logo";

export default function Header({
  openKeyDialog,
}: {
  openKeyDialog?: () => void;
}) {
  const locale = useLocale();
  const [showKeyWarning, setShowKeyWarning] = useState(false);

  useEffect(() => {
    const hasKey = localStorage?.getItem("falKey");
    setShowKeyWarning(!hasKey);
  }, []);

  return (
    <header className="px-4 py-2 flex justify-between items-center border-b border-gray-200 bg-white">
      <h1 className="text-lg font-medium">
        <Link href={`/${locale}/app`}>
          <Logo />
        </Link>
      </h1>
      <nav className="flex flex-row items-center justify-end gap-1">
        <Button variant="ghost" size="sm" asChild>
          <a
            href="https://gostudio.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-gray-900 flex items-center gap-1"
          >
            GoStudio.ai
            <ExternalLinkIcon className="w-3 h-3 opacity-50" />
          </a>
        </Button>
        <LanguageSwitcher />
        {openKeyDialog && (
          <Button
            variant="ghost"
            size="icon"
            className="relative text-gray-500 hover:text-gray-900"
            onClick={openKeyDialog}
          >
            {showKeyWarning && (
              <span className="bg-orange-500 w-2 h-2 rounded-full absolute top-1 right-1" />
            )}
            <SettingsIcon className="w-5 h-5" />
          </Button>
        )}
      </nav>
    </header>
  );
}
