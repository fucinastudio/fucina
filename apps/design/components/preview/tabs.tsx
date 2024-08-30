import { User, Lock } from "lucide-react";

import Preview from "@/components/preview/preview";
import {
  Button,
  Input,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Label,
  Card,
} from "@fucina/ui";

export const TabsPreview = () => (
  <Preview>
    <Tabs defaultValue="account" className="w-96">
      <TabsList className="w-full">
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account" className="w-full space-y-4">
        <div className="mt-2 space-y-2">
          <div className="space-y-2">
            <p className="text-heading-subsection">Account</p>
            <p className="text-description text-md">
              Make changes to your account here. Click save when you&apos;re done.
            </p>
          </div>
          <div className="grid gap-2 py-4">
            <div className="space-y-1">
              <Label htmlFor="name">Name</Label>
              <Input id="name" defaultValue="Michael Scott" className="input-docs" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="username">Username</Label>
              <Input id="username" defaultValue="@mscott" className="input-docs" />
            </div>
          </div>
        </div>
        <div className="flex">
          <Button>Save</Button>
        </div>
      </TabsContent>
      <TabsContent value="password" className="w-full space-y-4">
        <div className="mt-2 space-y-2">
          <div className="space-y-2">
            <p className="text-heading-subsection">Password</p>
            <p className="text-description text-md">
              Change your password here. After saving, you&apos;ll be logged out.
            </p>
          </div>
          <div className="grid gap-2 py-4">
            <div className="space-y-1">
              <Label htmlFor="current">Current password</Label>
              <Input id="current" type="password" className="input-docs" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="new">New password</Label>
              <Input id="new" type="password" className="input-docs" />
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
      <TabsContent value="account">
        <Card>
          <div>
            <h3>Account</h3>
            <p>
              Make changes to your account here. Click save when you&apos;re done.
            </p>
          </div>
          <div className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="name">Name</Label>
              <Input id="name" defaultValue="Michael Scott" className="input-docs" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="username">Username</Label>
              <Input id="username" defaultValue="@mscott" className="input-docs" />
            </div>
          </div>
          <div>
            <Button>Save</Button>
          </div>
        </Card>
      </TabsContent>
      <TabsContent value="password">
        <Card>
          <div>
            <h3>Password</h3>
            <p>
              Change your password here. After saving, you&apos;ll be logged out.
            </p>
          </div>
          <div className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="current">Current password</Label>
              <Input id="current" type="password" className="input-docs" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="new">New password</Label>
              <Input id="new" type="password" className="input-docs" />
            </div>
          </div>
          <div>
            <Button>Save</Button>
          </div>
        </Card>
      </TabsContent>
    </Tabs>
  </Preview>
);
