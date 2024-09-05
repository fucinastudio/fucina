import Preview from "@/components/preview/preview";
import {
  Button,
  Input,
  Label,
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetBody,
} from "@fucina/ui";

export const SheetPreview = () => (
  <Preview>
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="secondary">Open</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Edit profile</SheetTitle>
          <SheetDescription>Make changes to your profile here. Click save when youre done.</SheetDescription>
        </SheetHeader>
        <SheetBody className="flex w-full flex-col items-start gap-4 py-4">
          <div className="flex w-full flex-col justify-start gap-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" value="Michael Scott" className="patch-input col-span-3" />
          </div>
          <div className="flex w-full flex-col justify-start gap-2">
            <Label htmlFor="username">Username</Label>
            <Input id="username" value="@mscott" className="patch-input col-span-3" />
          </div>
        </SheetBody>
        <SheetFooter>
          <SheetClose asChild>
            <Button variant="secondary">Cancel</Button>
          </SheetClose>
          <Button type="submit">Save changes</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  </Preview>
);
