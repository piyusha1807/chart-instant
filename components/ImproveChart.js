import React, { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import CustomSelect from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { PlusIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";

const Trace = () => {
  return (
    <div>
      {/* <Button variant="outline">
        <PlusIcon className="mr-2 h-4 w-4" /> Add Trace
      </Button> */}
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>
            <div className="flex justify-between">Legend</div>
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4">
            <div className="flex w-full max-w-md items-center justify-between">
              <Label htmlFor="name">Show Legend</Label>
              <Switch checked={true} onCheckedChange={() => {}} />
            </div>
            <div className="flex w-full max-w-md items-center justify-between">
              <Label htmlFor="name">Legend Position</Label>
              <CustomSelect
                isMulti={false}
                closeMenuOnSelect={true}
                options={[]}
                onChange={() => {}}
                value={{}}
              />
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>
            <div className="flex justify-between">Axes Titles</div>
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4">
            <div className="grid w-full max-w-md items-center gap-1.5">
              <Label htmlFor="name">Horizontal Axis Title</Label>
              <Input type="text" placeholder="Your Horizontal Axis Title" />
            </div>
            <div className="grid w-full max-w-md items-center gap-1.5">
              <Label htmlFor="name">Vertical Axis Title</Label>
              <Input type="text" placeholder="Your Vertical Axis Title" />
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>
            <div className="flex justify-between">Advanced Options</div>
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4">
            <div className="flex w-full max-w-md items-center justify-between">
              <Label htmlFor="name">Show Data Labels</Label>
              <Switch checked={true} onCheckedChange={() => {}} />
            </div>
            <div className="flex w-full max-w-md items-center justify-between">
              <Label htmlFor="name">Show Tooltips</Label>
              <Switch checked={true} onCheckedChange={() => {}} />
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <div className="flex w-full max-w-md items-center justify-between">
        <Label htmlFor="color">Color</Label>
        <Popover>
          <PopoverTrigger>Open</PopoverTrigger>
          <PopoverContent></PopoverContent>
        </Popover>
      </div>
    </div>
  );
};

export default Trace;
