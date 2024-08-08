"use client";

import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { sellerNavLinks } from "../shared/navigationData";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const SellerSidebar = () => {
  const pathname = usePathname();
  return (
    <div className="hidden border-r bg-muted/40 md:flex h-full flex-col gap-2">
      <div className="flex-1 pt-4">
        <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
          {sellerNavLinks.map((nav) => (
            <Link
              href={nav.path}
              key={nav.label}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2  transition-all hover:text-primary",
                nav.path === pathname
                  ? "text-primary bg-muted"
                  : "text-muted-foreground"
              )}
            >
              <nav.icon className="h-4 w-4" />
              {nav.label}
              {nav.badge && (
                <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                  {nav.badge}
                </Badge>
              )}
            </Link>
          ))}
        </nav>
      </div>

      <div className="mt-auto p-4">
        <Card x-chunk="dashboard-02-chunk-0">
          <CardHeader className="p-2 pt-0 md:p-4">
            <CardTitle>Upgrade to Pro</CardTitle>
            <CardDescription>
              Unlock all features and get unlimited access to our support team.
            </CardDescription>
          </CardHeader>
          <CardContent className="p-2 pt-0 md:p-4 md:pt-0">
            <Button size="sm" className="w-full">
              Upgrade
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SellerSidebar;
