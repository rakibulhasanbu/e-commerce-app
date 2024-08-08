"use client";

import Link from "next/link";
import { Bell, CircleUser, LogOut, Menu, Package2, Search } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "../ui/button";
import { sellerNavLinks } from "../shared/navigationData";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Logo from "../shared/Logo";
import { useDispatch } from "react-redux";
import { logOut } from "@/redux/features/auth/authSlice";

const SellerNavbar = () => {
  const pathname = usePathname();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logOut());
  };

  return (
    <header className="grid h-14 lg:h-[60px] border-b bg-muted/40 w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <Logo />

      <div className="flex items-center gap-4 border-l px-4 lg:px-6 2xl:px-8 ">
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="shrink-0 md:hidden"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>

          <SheetContent side="left" className="flex flex-col">
            <nav className="grid gap-2 text-lg font-medium">
              <Logo />

              {sellerNavLinks.map((nav) => (
                <Link
                  href={nav.path}
                  key={nav.label}
                  className={cn(
                    "mx-[-0.65rem] flex items-center gap-4 px-3 py-2 text-muted-foreground hover:text-foreground rounded-lg transition-all",
                    nav.path === pathname
                      ? "text-primary bg-muted font-medium"
                      : "text-muted-foreground"
                  )}
                >
                  <nav.icon className="h-5 w-5" />
                  {nav.label}
                  {nav.badge && (
                    <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                      {nav.badge}
                    </Badge>
                  )}
                </Link>
              ))}
            </nav>

            <div className="mt-auto">
              <Card>
                <CardHeader>
                  <CardTitle>Upgrade to Pro</CardTitle>
                  <CardDescription>
                    Unlock all features and get unlimited access to our support
                    team.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button size="sm" className="w-full">
                    Upgrade
                  </Button>
                </CardContent>
              </Card>
            </div>
          </SheetContent>
        </Sheet>

        <div className="w-full flex-1">
          <form>
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search products..."
                className="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3"
              />
            </div>
          </form>
        </div>

        <div className="flex items-center gap-4 lg:gap-6">
          <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
            <Bell className="h-4 w-4" />
            <span className="sr-only">Toggle notifications</span>
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" size="icon" className="rounded-full">
                <CircleUser className="h-5 w-5" />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                onClick={handleLogout}
                className="flex items-center gap-1 cursor-pointer"
              >
                <LogOut size={20} />
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};

export default SellerNavbar;
