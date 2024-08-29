"use client";

import * as React from "react";
import { Badge } from "@fucina/ui/src/badge";
import { Calculator, CalendarIcon, CreditCard, Settings, Smile, User } from "lucide-react";
import {
  //Accordion
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  //Accordion
} from "@fucina/ui/src/accordion";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
  CommandDialog,
} from "@fucina/ui/src/command";
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu";
import { ThemeToggle } from "@/components/theme-toggle";
import { Popover, PopoverContent, PopoverTrigger } from "@fucina/ui/src/popover";
import { Button } from "@fucina/ui/src/button";
import { Skeleton } from "@fucina/ui/src/skeleton";
import { Switch } from "@fucina/ui/src/switch";
import { Tooltip } from "@fucina/ui/src/tooltip";
import { Checkbox } from "@fucina/ui/src/checkbox";
import { Toggle } from "@fucina/ui/src/toggle";
import { Textarea } from "@fucina/ui/src/textarea";
import { ToggleGroup, ToggleGroupItem } from "@fucina/ui/src/toggle-group";
import { Bold, Italic, Underline } from "@fucina/ui/src/icon/icon";
import { RadioGroup, RadioGroupItem } from "@fucina/ui/src/radio-group";
import { Label } from "@fucina/ui/src/label";
import { Tag } from "@fucina/ui/src/tag";
import { Slider } from "@fucina/ui/src/slider";
import { Input } from "@fucina/ui/src/input";
import { Progress } from "@fucina/ui/src/progress";
import { ScrollArea } from "@fucina/ui/src/scroll-area";
import { Separator } from "@fucina/ui/src/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@fucina/ui/src/tabs";
import { Segmented, SegmentedContent, SegmentedList, SegmentedTrigger } from "@fucina/ui/src/segmented";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@fucina/ui/src/navigation-menu";
import {
  Select,
  SelectSeparator,
  SelectContent,
  SelectGroup,
  SelectGroupLabel,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@fucina/ui/src/select";
import Link from "next/link";
import {
  Sheet,
  SheetBody,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@fucina/ui/src/sheet";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@fucina/ui/src/resizable";
import { Alert } from "@fucina/ui/src/alert";
import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuSubMenu,
  ContextMenuSubMenuContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from "@fucina/ui/src/context-menu";

import { toast } from "@fucina/ui/src/toast";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@fucina/ui/src/alert-dialog";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRoot,
  TableRow,
} from "@fucina/ui/src/table";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@fucina/ui/src/hover-card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuSubMenu,
  DropdownMenuSubMenuContent,
  DropdownMenuSubMenuTrigger,
  DropdownMenuTrigger,
  DropdownMenuCheckboxItem,
} from "@fucina/ui/src/dropdown-menu";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@fucina/ui/src/dialog";

const dataSelectIcon = [
  {
    value: "living-area",
    label: "Living area",
    icon: Bold,
  },
  {
    value: "shopping-area",
    label: "Shopping area",
    icon: Italic,
  },
  {
    value: "business-park",
    label: "Business park",
    icon: Underline,
  },
];

const dataSelect = [
  {
    value: "dress-shirt-striped",
    label: "Striped Dress Shirt",
  },
  {
    value: "relaxed-button-down",
    label: "Relaxed Fit Button Down",
  },
  {
    value: "slim-button-down",
    label: "Slim Fit Button Down",
  },
  {
    value: "dress-shirt-solid",
    label: "Solid Dress Shirt",
  },
  {
    value: "dress-shirt-check",
    label: "Check Dress Shirt",
  },
];

const data: Array<{
  id: number;
  name: string;
  sales: string;
  region: string;
  status: string;
  deltaType: string;
  hours: number;
}> = [
  {
    id: 1,
    name: "Peter McCrown",
    sales: "1,000,000",
    region: "Region A",
    status: "overperforming",
    deltaType: "moderateIncrease",
    hours: 100,
  },
  {
    id: 2,
    name: "Jon Mueller",
    sales: "2,202,000",
    region: "Region B",
    status: "overperforming",
    deltaType: "moderateIncrease",
    hours: 110,
  },
  {
    id: 3,
    name: "Peter Federer",
    sales: "1,505,000",
    region: "Region C",
    status: "underperforming",
    deltaType: "moderateDecrease",
    hours: 90,
  },
  {
    id: 4,
    name: "Maxime Bujet",
    sales: "500,000",
    region: "Region D",
    status: "overperforming",
    deltaType: "moderateDecrease",
    hours: 92,
  },
  {
    id: 5,
    name: "Emma Nelly",
    sales: "600,000",
    region: "Region E",
    status: "underperforming",
    deltaType: "moderateDecrease",
    hours: 95,
  },
];

const tags = Array.from({ length: 50 }).map((_, i, a) => `v1.2.0-beta.${a.length - i}`);

type Checked = DropdownMenuCheckboxItemProps["checked"];

export default function Home() {
  const [open, setOpen] = React.useState(false);
  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "j" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const [sort, setSort] = React.useState("alpha");
  const [showStatusBar, setShowStatusBar] = React.useState<Checked>(true);
  const [showActivityBar, setShowActivityBar] = React.useState<Checked>(true);
  const [showPanel, setShowPanel] = React.useState<Checked>(false);

  return (
    <main className="flex flex-col justify-between items-center gap-3 p-24 min-h-screen">
      <div className="flex flex-col gap-4">
        <Alert variant="default" title="Default Variant">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
          labore et dolore magna aliquyam erat.
        </Alert>
        <Alert variant="brand" title="Success Variant">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
          labore et dolore magna aliquyam erat.
        </Alert>
        <Alert variant="warning" title="Warning Variant">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
          labore et dolore magna aliquyam erat.
        </Alert>
        <Alert variant="danger" title="Neutral Variant">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
          labore et dolore magna aliquyam erat.
        </Alert>
      </div>
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button variant="secondary">Show Dialog</Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your account and remove your data
              from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
      <div className="flex flex-wrap justify-center gap-3">
        <Badge>Default</Badge>
        <Badge variant="brand">Brand</Badge>
        <Badge variant="warning">Warning</Badge>
        <Badge variant="danger">Danger</Badge>
      </div>
      <div className="flex flex-wrap justify-center gap-3">
        <Badge>2</Badge>
        <Badge variant="brand">13</Badge>
        <Badge variant="warning">47</Badge>
        <Badge variant="danger">99</Badge>
      </div>
      <div className="flex flex-wrap justify-center gap-3">
        <Badge>
          <Bold />
          Default
        </Badge>
        <Badge variant="brand">
          <Italic />
          Brand
        </Badge>
        <Badge variant="warning">
          <Underline />
          Warning
        </Badge>
        <Badge variant="danger">
          <CalendarIcon />
          Danger
        </Badge>
      </div>

      <Checkbox />
      <div className="flex justify-center items-center gap-2">
        <Checkbox disabled id="r1" />
        <Label disabled htmlFor="r1">
          I&apos;d like to be notified by SMS.
        </Label>
      </div>
      <div className="flex justify-center items-center gap-2">
        <Checkbox id="r3" checked="indeterminate" />
        <Label htmlFor="r3">Select all rows</Label>
      </div>
      <>
        <p className="text-muted-foreground text-sm">
          Press{" "}
          <kbd className="inline-flex items-center gap-1 border-default bg-muted opacity-100 px-1.5 border rounded h-5 font-medium font-mono text-[10px] text-muted-foreground pointer-events-none select-none">
            <span className="text-xs">⌘</span>J
          </kbd>
        </p>
        <CommandDialog open={open} onOpenChange={setOpen}>
          <CommandInput placeholder="Type a command or search..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Suggestions">
              <CommandItem disabled>
                <CalendarIcon />
                <span>Calendar</span>
              </CommandItem>
              <CommandItem>
                <Smile />
                <span>Search Emoji</span>
              </CommandItem>
              <CommandItem>
                <Calculator />
                <span>Calculator</span>
              </CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Settings">
              <CommandItem>
                <User />
                <span>Profile</span>
                <CommandShortcut>⌘P</CommandShortcut>
              </CommandItem>
              <CommandItem>
                <CreditCard />
                <span>Billing</span>
                <CommandShortcut>⌘B</CommandShortcut>
              </CommandItem>
              <CommandItem>
                <Settings />
                <span>Settings</span>
                <CommandShortcut>⌘S</CommandShortcut>
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </CommandDialog>
      </>
      <Command className="border-default shadow-md border rounded-lg">
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            <CommandItem>
              <CalendarIcon className="mr-2 size-4" />
              <span>Calendar</span>
            </CommandItem>
            <CommandItem>
              <Smile className="mr-2 size-4" />
              <span>Search Emoji</span>
            </CommandItem>
            <CommandItem disabled>
              <Calculator className="mr-2 size-4" />
              <span>Calculator</span>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Settings">
            <CommandItem>
              <User className="mr-2 size-4" />
              <span>Profile</span>
              <CommandShortcut>⌘P</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <CreditCard className="mr-2 size-4" />
              <span>Billing</span>
              <CommandShortcut>⌘B</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <Settings className="mr-2 size-4" />
              <span>Settings</span>
              <CommandShortcut>⌘S</CommandShortcut>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
      <ContextMenu>
        <ContextMenuTrigger className="flex justify-center items-center border border-dashed rounded-md w-[300px] h-[150px] text-sm">
          Right click here
        </ContextMenuTrigger>
        <ContextMenuContent className="w-64">
          <ContextMenuItem shortcut="⌘[">Back</ContextMenuItem>
          <ContextMenuItem disabled shortcut="⌘]">
            Forward
          </ContextMenuItem>
          <ContextMenuItem shortcut="⌘R">Reload</ContextMenuItem>
          <ContextMenuSubMenu>
            <ContextMenuSubTrigger>More Tools</ContextMenuSubTrigger>
            <ContextMenuSubMenuContent className="w-48">
              <ContextMenuItem shortcut="⇧⌘S">Save Page As...</ContextMenuItem>
              <ContextMenuItem>Create Shortcut...</ContextMenuItem>
              <ContextMenuItem>Name Window...</ContextMenuItem>
              <ContextMenuSeparator />
              <ContextMenuItem>Developer Tools</ContextMenuItem>
            </ContextMenuSubMenuContent>
          </ContextMenuSubMenu>
          <ContextMenuSeparator />
          <ContextMenuCheckboxItem checked shortcut="⌘⇧B">
            Show Bookmarks Bar
          </ContextMenuCheckboxItem>
          <ContextMenuCheckboxItem>Show Full URLs</ContextMenuCheckboxItem>
          <ContextMenuSeparator />
          <ContextMenuRadioGroup value="pedro">
            <ContextMenuLabel>People</ContextMenuLabel>
            <ContextMenuSeparator />
            <ContextMenuRadioItem value="pedro">Pedro Duarte</ContextMenuRadioItem>
            <ContextMenuRadioItem value="colm">Colm Tuite</ContextMenuRadioItem>
          </ContextMenuRadioGroup>
        </ContextMenuContent>
      </ContextMenu>
      <div className="flex justify-center items-center gap-2">
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="secondary">Open Dialog</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-lg">
            <DialogHeader>
              <DialogTitle>Account Created Successfully</DialogTitle>
              <DialogDescription>
                Your account has been created successfully. You can now login to your account. For more
                information, please contact us.
              </DialogDescription>
            </DialogHeader>
            <div className="flex flex-col gap-2 py-6">
              <Input />
              <Input />
            </div>
            <DialogFooter className="mt-6">
              <DialogClose asChild>
                <Button className="mt-2 sm:mt-0 w-full sm:w-fit" variant="secondary">
                  Go back
                </Button>
              </DialogClose>
              <DialogClose asChild>
                <Button className="w-full sm:w-fit">Ok, got it!</Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="secondary">Open</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="min-w-56">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />

            <DropdownMenuGroup>
              <DropdownMenuItem>
                <Italic />
                Upgrade
              </DropdownMenuItem>
              <DropdownMenuItem disabled shortcut="⌘B">
                <span className="flex items-center gap-x-2">
                  <Bold className="text-inherit size-4" />
                  <span>Billing</span>
                </span>
              </DropdownMenuItem>
              <DropdownMenuItem shortcut="⌘S">
                <span className="flex items-center gap-x-2">
                  <Bold className="text-inherit size-4" />

                  <span>Account Settings</span>
                </span>
              </DropdownMenuItem>
            </DropdownMenuGroup>

            <DropdownMenuSeparator />

            <DropdownMenuGroup>
              <DropdownMenuItem hint="Pro">
                <Italic />
                <span>Manage workspace</span>
              </DropdownMenuItem>

              <DropdownMenuSubMenu>
                <DropdownMenuSubMenuTrigger>
                  <Italic />
                  <span>Invite users</span>
                </DropdownMenuSubMenuTrigger>
                <DropdownMenuSubMenuContent>
                  <DropdownMenuItem>
                    <span className="flex items-center gap-x-2">
                      <Bold className="text-inherit size-4" />
                      <span>Email</span>
                    </span>
                  </DropdownMenuItem>

                  <DropdownMenuSubMenu>
                    <DropdownMenuSubMenuTrigger>
                      <span className="flex items-center gap-x-2">
                        <Italic className="text-inherit size-4" />
                        <span>Message</span>
                      </span>
                    </DropdownMenuSubMenuTrigger>
                    <DropdownMenuSubMenuContent>
                      <DropdownMenuItem>
                        <span className="flex items-center gap-x-2">
                          <Bold className="text-inherit size-4" />
                          <span>Whatsapp</span>
                        </span>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <span className="flex items-center gap-x-2">
                          <Underline className="text-inherit size-4" />
                          <span>Telegram</span>
                        </span>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <span className="flex items-center gap-x-2">
                          <Italic className="text-inherit size-4" />
                          <span>Discord</span>
                        </span>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <span className="flex items-center gap-x-2">
                          <Bold className="text-inherit size-4" />
                          <span>Slack</span>
                        </span>
                      </DropdownMenuItem>
                    </DropdownMenuSubMenuContent>
                  </DropdownMenuSubMenu>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <span className="flex items-center gap-x-2">
                      <Underline className="text-inherit size-4" />
                      <span>More...</span>
                    </span>
                  </DropdownMenuItem>
                </DropdownMenuSubMenuContent>
              </DropdownMenuSubMenu>
              <DropdownMenuItem shortcut="⌘T">
                <span className="flex items-center gap-x-2">
                  <Bold className="text-inherit size-4" />
                  <span>New Workspace</span>
                </span>
              </DropdownMenuItem>
            </DropdownMenuGroup>

            <DropdownMenuSeparator />

            <DropdownMenuItem>
              <span className="flex items-center gap-x-2">
                <Bold className="text-inherit size-4" />
                <span>Support</span>
              </span>
            </DropdownMenuItem>
            <DropdownMenuItem shortcut="⇧⌘Q">
              <span className="flex items-center gap-x-2">
                <Italic className="text-inherit size-4" />
                <span>Sign out</span>
              </span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="secondary">Open</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Sorting</DropdownMenuLabel>

            <DropdownMenuSeparator />

            <DropdownMenuGroup>
              <DropdownMenuRadioGroup value={sort} onValueChange={setSort}>
                <DropdownMenuRadioItem value="alpha" hint="A–Z">
                  Alphabetical
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="alpha-reverse" hint="Z-A">
                  Reverse Alphabetical
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="asc" hint="1-99">
                  Created At
                </DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="secondary">Open</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Layout</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuCheckboxItem checked={showStatusBar} onCheckedChange={setShowStatusBar} hint="Pro">
              Show status bar
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem checked={showActivityBar} onCheckedChange={setShowActivityBar}>
              Show activity bar
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem checked={showPanel} onCheckedChange={setShowPanel} hint="Base">
              Show panel
            </DropdownMenuCheckboxItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <HoverCard>
        <HoverCardTrigger asChild>
          <Button variant="link">@nextjs</Button>
        </HoverCardTrigger>
        <HoverCardContent className="w-80">
          <div className="flex justify-between space-x-4">
            <div className="space-y-1">
              <p className="text-md-semibold">@nextjs</p>
              <p className="text-md">The React Framework – created and maintained by @vercel.</p>
              <div className="flex items-center pt-2">
                <span className="text-description text-sm">Joined December 2021</span>
              </div>
            </div>
          </div>
        </HoverCardContent>
      </HoverCard>
      <NavigationMenu>
        <NavigationMenuList orientation="horizontal">
          <NavigationMenuItem>
            <Link href="/docs" legacyBehavior passHref>
              <NavigationMenuLink active={true}>
                <Bold />
                Ideas
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/docs" legacyBehavior passHref>
              <NavigationMenuLink>
                <Italic />
                Roadmap
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/docs" legacyBehavior passHref>
              <NavigationMenuLink>
                <Underline />
                Community
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <NavigationMenu>
        <NavigationMenuList orientation="vertical">
          <NavigationMenuItem className="w-full">
            <Link href="/docs" legacyBehavior passHref>
              <NavigationMenuLink active={true} className="justify-start w-full">
                <Bold />
                Ideas
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem className="w-full">
            <Link href="/docs" legacyBehavior passHref>
              <NavigationMenuLink className="justify-start w-full">
                <Italic />
                Roadmap
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem className="w-full">
            <Link href="/docs" legacyBehavior passHref>
              <NavigationMenuLink className="justify-start w-full">
                <Underline />
                Community
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <NavigationMenu>
        <NavigationMenuList orientation="horizontal">
          <NavigationMenuItem>
            <Link href="/docs" legacyBehavior passHref>
              <NavigationMenuLink size="small">Ideas</NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/docs" legacyBehavior passHref>
              <NavigationMenuLink size="small">Roadmap</NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/docs" legacyBehavior passHref>
              <NavigationMenuLink size="small">Community</NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <NavigationMenu>
        <NavigationMenuList orientation="vertical">
          <NavigationMenuItem>
            <Link href="/docs" legacyBehavior passHref>
              <NavigationMenuLink size="small">Ideas</NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/docs" legacyBehavior passHref>
              <NavigationMenuLink size="small">Roadmap</NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/docs" legacyBehavior passHref>
              <NavigationMenuLink size="small">Community</NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="secondary">Open popover</Button>
        </PopoverTrigger>
        <PopoverContent className="w-80">
          <div className="gap-4 grid">
            <div className="gap-2 grid">
              <div className="items-center gap-4 grid grid-cols-3">
                <Label htmlFor="width">Width</Label>
                <Input id="width" defaultValue="100%" className="col-span-2" />
              </div>
              <div className="items-center gap-4 grid grid-cols-3">
                <Label htmlFor="maxWidth">Max. width</Label>
                <Input id="maxWidth" defaultValue="300px" className="col-span-2" />
              </div>
              <div className="items-center gap-4 grid grid-cols-3">
                <Label htmlFor="height">Height</Label>
                <Input id="height" defaultValue="25px" className="col-span-2" />
              </div>
              <div className="items-center gap-4 grid grid-cols-3">
                <Label htmlFor="maxHeight">Max. height</Label>
                <Input id="maxHeight" defaultValue="none" className="col-span-2" />
              </div>
            </div>
          </div>
        </PopoverContent>
      </Popover>
      <Input hasError placeholder="Enter email" id="email" name="email" type="email" className="mt-2" />
      <Input disabled placeholder="Enter email" id="email" name="email" type="email" className="mt-2" />
      <Input id="file" name="file" type="file" className="mt-2" accept=".jpg" />
      <Input placeholder="Enter orders" id="order" name="order" type="number" className="mt-2" />
      <Input placeholder="Search addresses" id="search" name="search" type="search" className="mt-2" />
      <Input className="mx-auto max-w-xs" placeholder="Enter password" type="password" />
      <Input placeholder="Enter email" id="email" name="email" type="email" />
      <Progress variant="brand" value={75} label="75%" />
      <div className="flex justify-center">
        <RadioGroup>
          <div className="flex items-center gap-x-2">
            <RadioGroupItem value="1" id="radio_1" />
            <Label htmlFor="radio_1">First come first serve (FCFS)</Label>
          </div>
          <div className="flex items-center gap-x-2">
            <RadioGroupItem value="2" id="radio_2" />
            <Label htmlFor="radio_2">By appointment</Label>
          </div>
          <div className="flex items-center gap-x-2">
            <RadioGroupItem disabled value="3" id="radio_3" />
            <Label htmlFor="radio_3">By time window</Label>
          </div>
        </RadioGroup>
      </div>
      <ResizablePanelGroup direction="horizontal" className="border-default border rounded-lg max-w-md">
        <ResizablePanel defaultSize={50}>
          <div className="flex justify-center items-center p-6 h-[200px]">
            <span className="font-semibold">One</span>
          </div>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={50}>
          <ResizablePanelGroup direction="vertical">
            <ResizablePanel defaultSize={25}>
              <div className="flex justify-center items-center p-6 h-full">
                <span className="font-semibold">Two</span>
              </div>
            </ResizablePanel>
            <ResizableHandle />
            <ResizablePanel defaultSize={75}>
              <div className="flex justify-center items-center p-6 h-full">
                <span className="font-semibold">Three</span>
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </ResizablePanel>
      </ResizablePanelGroup>
      <ScrollArea className="border-default border rounded w-48 h-72">
        <div className="p-4">
          <h4 className="mb-4 font-medium text-description leading-none">Tags</h4>
          {tags.map((tag) => (
            <>
              <div key={tag}>{tag}</div>
              <Separator className="my-2" />
            </>
          ))}
        </div>
      </ScrollArea>
      <Segmented defaultValue="grid">
        <SegmentedList>
          <SegmentedTrigger value="grid">
            <Bold />
            Grid
          </SegmentedTrigger>
          <SegmentedTrigger value="list">
            <Bold />
            List
          </SegmentedTrigger>
        </SegmentedList>
        <SegmentedContent value="grid">Grid view</SegmentedContent>
        <SegmentedContent value="list">List view</SegmentedContent>
      </Segmented>
      <Select>
        <SelectTrigger className="max-w-80">
          <SelectValue placeholder="Select" />
        </SelectTrigger>
        <SelectContent>
          {dataSelect.map((item) => (
            <SelectItem key={item.value} value={item.value}>
              {item.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Select>
        <SelectTrigger disabled className="max-w-80">
          <SelectValue placeholder="Select" />
        </SelectTrigger>
        <SelectContent>
          {dataSelect.map((item) => (
            <SelectItem key={item.value} value={item.value}>
              {item.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Select>
        <SelectTrigger hasError className="max-w-80">
          <SelectValue placeholder="Select" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectGroupLabel>North America</SelectGroupLabel>

            {dataSelect.map((item) => (
              <SelectItem key={item.value} value={item.value}>
                {item.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
      <Select>
        <SelectTrigger className="mx-auto w-[250px]">
          <SelectValue placeholder="Select a timezone" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectGroupLabel>North America</SelectGroupLabel>
            <SelectItem value="est">Eastern Standard Time (EST)</SelectItem>
            <SelectItem value="cst">Central Standard Time (CST)</SelectItem>
            <SelectItem value="mst">Mountain Standard Time (MST)</SelectItem>
            <SelectItem value="pst">Pacific Standard Time (PST)</SelectItem>
            <SelectItem value="akst">Alaska Standard Time (AKST)</SelectItem>
            <SelectItem value="hst">Hawaii Standard Time (HST)</SelectItem>
          </SelectGroup>
          <SelectSeparator />
          <SelectGroup>
            <SelectGroupLabel>Europe & Africa</SelectGroupLabel>
            <SelectItem value="gmt">Greenwich Mean Time (GMT)</SelectItem>
            <SelectItem value="cet">Central European Time (CET)</SelectItem>
            <SelectItem value="eet">Eastern European Time (EET)</SelectItem>
            <SelectItem value="west">Western European Summer Time (WEST)</SelectItem>
            <SelectItem value="cat">Central Africa Time (CAT)</SelectItem>
            <SelectItem value="eat">East Africa Time (EAT)</SelectItem>
          </SelectGroup>
          <SelectSeparator />
          <SelectGroup>
            <SelectGroupLabel>Asia</SelectGroupLabel>
            <SelectItem value="msk">Moscow Time (MSK)</SelectItem>
            <SelectItem value="ist">India Standard Time (IST)</SelectItem>
            <SelectItem value="cst_china">China Standard Time (CST)</SelectItem>
            <SelectItem value="jst">Japan Standard Time (JST)</SelectItem>
            <SelectItem value="kst">Korea Standard Time (KST)</SelectItem>
            <SelectItem value="ist_indonesia">Indonesia Central Standard Time (WITA)</SelectItem>
          </SelectGroup>
          <SelectSeparator />
          <SelectGroup>
            <SelectGroupLabel>Australia & Pacific</SelectGroupLabel>
            <SelectItem value="awst">Australian Western Standard Time (AWST)</SelectItem>
            <SelectItem value="acst">Australian Central Standard Time (ACST)</SelectItem>
            <SelectItem value="aest">Australian Eastern Standard Time (AEST)</SelectItem>
            <SelectItem value="nzst">New Zealand Standard Time (NZST)</SelectItem>
            <SelectItem value="fjt">Fiji Time (FJT)</SelectItem>
          </SelectGroup>
          <SelectSeparator />
          <SelectGroup>
            <SelectGroupLabel>South America</SelectGroupLabel>
            <SelectItem value="art">Argentina Time (ART)</SelectItem>
            <SelectItem value="bot">Bolivia Time (BOT)</SelectItem>
            <SelectItem value="brt">Brasilia Time (BRT)</SelectItem>
            <SelectItem value="clt">Chile Standard Time (CLT)</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <Select defaultValue="living-area">
        <SelectTrigger className="mx-auto w-[250px]">
          <SelectValue placeholder="Select" />
        </SelectTrigger>
        <SelectContent>
          {dataSelectIcon.map((item) => (
            <SelectItem key={item.value} value={item.value}>
              <span className="flex items-center gap-2">
                <item.icon size={16} aria-hidden="true" />
                {item.label}
              </span>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Separator />
      <div className="flex items-center gap-1">
        <Button variant="primary">Open Dialog</Button>
        <Button variant="secondary">Open Dialog</Button>
        <Button variant="text">Open Dialog</Button>
        <Button variant="link">Open Dialog</Button>
        <Button variant="danger">Open Dialog</Button>
      </div>
      <div className="flex items-center gap-1">
        <Button size="small" variant="primary">
          Open Dialog
        </Button>
        <Button size="small" variant="secondary">
          Open Dialog
        </Button>
        <Button size="small" variant="text">
          Open Dialog
        </Button>
        <Button size="small" variant="link">
          Open Dialog
        </Button>
        <Button size="small" variant="danger">
          Open Dialog
        </Button>
      </div>
      <div className="flex items-center gap-1">
        <Button icon variant="primary">
          <Bold />
        </Button>
        <Button icon variant="secondary">
          <Bold />
        </Button>
        <Button icon variant="text">
          <Bold />
        </Button>
        <Button icon variant="link">
          <Bold />
        </Button>
        <Button icon variant="danger">
          <Bold />
        </Button>
      </div>
      <Separator />
      <div className="flex items-center gap-1">
        <Button icon size="small" variant="primary">
          <Bold />
        </Button>
        <Button icon size="small" variant="secondary">
          <Bold />
        </Button>
        <Button icon size="small" variant="text">
          <Bold />
        </Button>
        <Button icon size="small" variant="link">
          <Bold />
        </Button>
        <Button icon size="small" variant="danger">
          <Bold />
        </Button>
      </div>
      <Separator />
      <div className="flex items-center gap-1">
        <Button disabled variant="primary">
          Open Dialog
        </Button>
        <Button disabled variant="secondary">
          Open Dialog
        </Button>
        <Button disabled variant="text">
          Open Dialog
        </Button>
        <Button disabled variant="link">
          Open Dialog
        </Button>
        <Button disabled variant="danger">
          Open Dialog
        </Button>
      </div>
      <Separator />
      <div className="flex items-center gap-1">
        <Button disabled size="small" variant="primary">
          Open Dialog
        </Button>
        <Button disabled size="small" variant="secondary">
          Open Dialog
        </Button>
        <Button disabled size="small" variant="text">
          Open Dialog
        </Button>
        <Button disabled size="small" variant="link">
          Open Dialog
        </Button>
        <Button disabled size="small" variant="danger">
          Open Dialog
        </Button>
      </div>
      <Separator />
      <div className="flex items-center gap-1">
        <Button disabled icon variant="primary">
          <Bold />
        </Button>
        <Button disabled icon variant="secondary">
          <Bold />
        </Button>
        <Button disabled icon variant="text">
          <Bold />
        </Button>
        <Button disabled icon variant="link">
          <Bold />
        </Button>
        <Button disabled icon variant="danger">
          <Bold />
        </Button>
      </div>
      <div className="flex items-center gap-1">
        <Button disabled icon size="small" variant="primary">
          <Bold />
        </Button>
        <Button disabled icon size="small" variant="secondary">
          <Bold />
        </Button>
        <Button disabled icon size="small" variant="text">
          <Bold />
        </Button>
        <Button disabled icon size="small" variant="link">
          <Bold />
        </Button>
        <Button disabled icon size="small" variant="danger">
          <Bold />
        </Button>
      </div>
      <div className="flex items-center gap-1">
        <Button isLoading loadingText="wait a sec" variant="primary">
          Open Dialog
        </Button>
        <Button isLoading loadingText="wait a sec" variant="secondary">
          Open Dialog
        </Button>
        <Button isLoading loadingText="wait a sec" variant="text">
          Open Dialog
        </Button>
        <Button isLoading loadingText="wait a sec" variant="link">
          Open Dialog
        </Button>
        <Button isLoading loadingText="wait a sec" variant="danger">
          Open Dialog
        </Button>
      </div>
      <div className="flex items-center gap-1">
        <Button isLoading loadingText="wait a sec" size="small" variant="primary">
          Open Dialog
        </Button>
        <Button isLoading loadingText="wait a sec" size="small" variant="secondary">
          Open Dialog
        </Button>
        <Button isLoading loadingText="wait a sec" size="small" variant="text">
          Open Dialog
        </Button>
        <Button isLoading loadingText="wait a sec" size="small" variant="link">
          Open Dialog
        </Button>
        <Button isLoading loadingText="wait a sec" size="small" variant="danger">
          Open Dialog
        </Button>
      </div>
      <div className="flex items-center gap-1">
        <Button isLoading loadingText="wait a sec" icon variant="primary">
          <Bold />
        </Button>
        <Button isLoading loadingText="wait a sec" icon variant="secondary">
          <Bold />
        </Button>
        <Button isLoading loadingText="wait a sec" icon variant="text">
          <Bold />
        </Button>
        <Button isLoading loadingText="wait a sec" icon variant="link">
          <Bold />
        </Button>
        <Button isLoading loadingText="wait a sec" icon variant="danger">
          <Bold />
        </Button>
      </div>
      <div className="flex items-center gap-1">
        <Button isLoading loadingText="wait a sec" icon size="small" variant="primary">
          <Bold />
        </Button>
        <Button isLoading loadingText="wait a sec" icon size="small" variant="secondary">
          <Bold />
        </Button>
        <Button isLoading loadingText="wait a sec" icon size="small" variant="text">
          <Bold />
        </Button>
        <Button isLoading loadingText="wait a sec" icon size="small" variant="link">
          <Bold />
        </Button>
        <Button isLoading loadingText="wait a sec" icon size="small" variant="danger">
          <Bold />
        </Button>
      </div>
      <div className="flex justify-center">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="secondary">Open Dialog</Button>
          </SheetTrigger>
          <SheetContent className="sm:max-w-lg">
            <SheetHeader>
              <SheetTitle>Account Created Successfully</SheetTitle>
              <SheetDescription>
                Your account has been created successfully. You can now login to your account. For more
                information, please contact us.
              </SheetDescription>
            </SheetHeader>
            <SheetBody>
              <Input />
            </SheetBody>
            <SheetFooter className="mt-6">
              <SheetClose asChild>
                <Button variant="secondary">Go back</Button>
              </SheetClose>
              <SheetClose asChild>
                <Button>Ok, got it!</Button>
              </SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
      <ThemeToggle />
      <Skeleton shape="circle" />
      <Skeleton />
      <Slider defaultValue={[55]} className="w-full" />
      <Slider defaultValue={[20]} step={10} max={50} />
      <Slider defaultValue={[55, 75]} />
      <Slider disabled defaultValue={[55, 75]} />
      <div className="h-48">
        <Slider orientation="vertical" defaultValue={[55]} className="h-40" />
      </div>
      <Switch disabled />
      <Switch />
      <Switch defaultChecked />
      <Switch defaultChecked disabled />
      <Tabs defaultValue="tab1">
        <TabsList>
          <TabsTrigger value="tab1">
            <Bold />
            Returns
          </TabsTrigger>
          <TabsTrigger value="tab2">
            <Bold />
            Shipping
          </TabsTrigger>
          <TabsTrigger disabled value="tab3">
            <Bold />
            Shipping
          </TabsTrigger>
        </TabsList>
        <TabsContent value="tab1"></TabsContent>
        <TabsContent value="tab2">Racoon</TabsContent>
        <TabsContent value="tab3">Racoon</TabsContent>
      </Tabs>
      <TableRoot>
        <Table>
          <TableCaption>Recent invoices.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-10"></TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Sales ($)</TableHead>
              <TableHead>Region</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Working Hours (h)</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((item) => (
              <TableRow key={item.id}>
                <TableCell className="flex items-center h-12">
                  <Checkbox />
                </TableCell>
                <TableCell>{item.name}</TableCell>
                <TableCell className="text-right">{item.sales}</TableCell>
                <TableCell>
                  <Button variant="secondary">{item.region}</Button>
                </TableCell>
                <TableCell>
                  <Tag variant="brand">{item.status}</Tag>
                </TableCell>
                <TableCell className="text-right">{item.hours}</TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableHead colSpan={3} scope="row" className="text-right">
                4,642
              </TableHead>
              <TableHead colSpan={3} scope="row" className="text-right">
                497
              </TableHead>
            </TableRow>
          </TableFooter>
        </Table>
      </TableRoot>
      <h1 className="font-logo font-semibold text-7xl text-brand">FUCINA</h1>
      <h1 className="bg-chart-brand font-brand font-medium text-7xl">Design system</h1>
      <div className="flex justify-center">
        <Tooltip side="left" content={<div>Fuck</div>}>
          <Button variant="secondary" icon={true}>
            P
          </Button>
        </Tooltip>
      </div>
      <span className="flex items-center gap-1">
        <p>Pedro</p>
        <Tag variant="teal">Success</Tag>
      </span>
      <Textarea placeholder="Once upon a time..." />
      <ToggleGroup type="single">
        <ToggleGroupItem value="a" aria-label="Toggle bold">
          <Bold /> Bold
        </ToggleGroupItem>
        <ToggleGroupItem value="b" aria-label="Toggle bold">
          <Bold />
        </ToggleGroupItem>
        <ToggleGroupItem value="c" aria-label="Toggle bold">
          <Bold /> Bold
        </ToggleGroupItem>
      </ToggleGroup>
      <Toggle disabled aria-label="Toggle bold">
        <Bold /> Bold
      </Toggle>
      <Toggle aria-label="Toggle bold">Bold</Toggle>
      <Toggle aria-label="Toggle bold">
        <Bold />
      </Toggle>
      <Button
        variant="primary"
        onClick={() =>
          toast("Event has been created", {
            description: "Monday, January 3rd at 6:00pm",
          })
        }>
        Peeeedro
      </Button>
      <Button
        variant="primary"
        onClick={() =>
          toast("Event has been created", {
            description: "Monday, January 3rd at 6:00pm",
            action: {
              label: "Undo dai",
              onClick: () => console.log("Undo"),
            },
          })
        }>
        Peeeedro
      </Button>
      <Button
        variant="primary"
        onClick={() =>
          toast.warning("Event has been created", {
            action: {
              label: "Undo dai",
              onClick: () => console.log("Undo"),
            },
          })
        }>
        Peeeedro
      </Button>
      <Button
        variant="primary"
        onClick={() =>
          toast.error("Event has been created", {
            action: {
              label: "Undo dai",
              onClick: () => console.log("Undo"),
            },
          })
        }>
        Peeeedro
      </Button>
      <div className="bg-brand text-inverse size-80"> Fuck</div>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Is it styled?</AccordionTrigger>
          <AccordionContent>
            Yes. It comes with default styles that matches the other components&apos; aesthetic.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Is it animated?</AccordionTrigger>
          <AccordionContent>Yes. It&apos;s animated by default.</AccordionContent>
        </AccordionItem>
      </Accordion>
    </main>
  );
}
