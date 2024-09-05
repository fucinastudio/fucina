import { User, Lock } from "lucide-react";

import Preview from "@/components/preview/preview";
import { Button, Input, Tabs, TabsContent, TabsList, TabsTrigger, Label, Card } from "@fucina/ui";

export const TabsPreview = () => (
  <Preview>
    <Tabs defaultValue="account" className="w-96">
      <TabsList className="w-full">
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account" className="space-y-4 w-full">
        <div className="space-y-2 mt-2">
          <div className="space-y-2">
            <p className="text-heading-subsection">Account</p>
            <p className="text-description text-md">
              Make changes to your account here. Click save when you&apos;re done.
            </p>
          </div>
          <div className="gap-2 grid py-4">
            <div className="space-y-1">
              <Label htmlFor="name">Name</Label>
              <Input id="name" defaultValue="Michael Scott" className="patch-input" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="username">Username</Label>
              <Input id="username" defaultValue="@mscott" className="patch-input" />
            </div>
          </div>
        </div>
        <div className="flex">
          <Button>Save</Button>
        </div>
      </TabsContent>
      <TabsContent value="password" className="space-y-4 w-full">
        <div className="space-y-2 mt-2">
          <div className="space-y-2">
            <p className="text-heading-subsection">Password</p>
            <p className="text-description text-md">
              Change your password here. After saving, you&apos;ll be logged out.
            </p>
          </div>
          <div className="gap-2 grid py-4">
            <div className="space-y-1">
              <Label htmlFor="current">Current password</Label>
              <Input id="current" type="password" className="patch-input" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="new">New password</Label>
              <Input id="new" type="password" className="patch-input" />
            </div>
          </div>
        </div>
        <div className="flex">
          <Button>Save</Button>
        </div>
      </TabsContent>
    </Tabs>
  </Preview>
);

export const TabsDefault = () => (
  <Preview>
    <Tabs defaultValue="account" className="w-96">
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account">Make changes to your account here.</TabsContent>
      <TabsContent value="password">Change your password here.</TabsContent>
    </Tabs>
  </Preview>
);

export const TabsDefaultValue = () => (
  <Preview>
    <Tabs defaultValue="password" className="w-96">
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account">Make changes to your account here.</TabsContent>
      <TabsContent value="password">Change your password here.</TabsContent>
    </Tabs>
  </Preview>
);

export const TabsDisabled = () => (
  <Preview>
    <Tabs defaultValue="account" className="w-96">
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password" disabled>
          Password
        </TabsTrigger>
      </TabsList>
      <TabsContent value="account">Make changes to your account here.</TabsContent>
      <TabsContent value="password">Change your password here.</TabsContent>
    </Tabs>
  </Preview>
);

export const TabsWithIcon = () => (
  <Preview>
    <Tabs defaultValue="account" className="w-96">
      <TabsList>
        <TabsTrigger value="account">
          <User />
          Account
        </TabsTrigger>
        <TabsTrigger value="password">
          <Lock />
          Password
        </TabsTrigger>
      </TabsList>
      <TabsContent value="account">Make changes to your account here.</TabsContent>
      <TabsContent value="password">Change your password here.</TabsContent>
    </Tabs>
  </Preview>
);

export const TabsWithCard = () => (
  <Preview>
    <Tabs defaultValue="account" className="w-96">
      <TabsList className="w-full">
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account" className="space-y-4 w-full">
        <Card>
          <div className="space-y-2">
            <div className="space-y-2">
              <p className="text-heading-subsection">Account</p>
              <p className="text-description text-md">
                Make changes to your account here. Click save when you&apos;re done.
              </p>
            </div>
            <div className="gap-2 grid py-4">
              <div className="space-y-1">
                <Label htmlFor="name">Name</Label>
                <Input id="name" defaultValue="Michael Scott" className="patch-input" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="username">Username</Label>
                <Input id="username" defaultValue="@mscott" className="patch-input" />
              </div>
            </div>
          </div>
          <div className="flex mt-2">
            <Button>Save</Button>
          </div>
        </Card>
      </TabsContent>
      <TabsContent value="password" className="space-y-4 w-full">
        <Card>
          <div className="space-y-2">
            <div className="space-y-2">
              <p className="text-heading-subsection">Password</p>
              <p className="text-description text-md">
                Change your password here. After saving, you&apos;ll be logged out.
              </p>
            </div>
            <div className="gap-2 grid py-4">
              <div className="space-y-1">
                <Label htmlFor="current">Current password</Label>
                <Input id="current" type="password" className="patch-input" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="new">New password</Label>
                <Input id="new" type="password" className="patch-input" />
              </div>
            </div>
          </div>
          <div className="flex mt-2">
            <Button>Save</Button>
          </div>
        </Card>
      </TabsContent>
    </Tabs>
  </Preview>
);
