"use client";

import { useEffect, useState } from "react";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "../ui/command";
import { Button } from "../ui/button";

export default function SearchCommand({
  renderAs = button,
  label = "Add stock",
  initialStocks,
}) {
  const [open, setOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((v) => !v);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const handleSelectStock = (value: string) => {
    console.log("Stock selected");
    setOpen(false);
  };

  return (
    <>
      {renderAs === "text" ? <span>{label}</span> : <Button onClick={()=>setOpen(true)}>{label}</Button>}
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput
          value={searchTerm}
          onValueChange={setSearchTerm}
          placeholder="Search stocks..."
        />
        <CommandList>
          <CommandEmpty>{loading ? "Loading..." : "No results."}</CommandEmpty>
          <CommandGroup heading="Stocks">
            <CommandItem value="AAPL" onSelect={handleSelectStock}>
              AAPL
            </CommandItem>
            <CommandItem value="GOOGL" onSelect={handleSelectStock}>
              GOOGL
            </CommandItem>
            <CommandItem value="MSFT" onSelect={handleSelectStock}>
              MSFT
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}
