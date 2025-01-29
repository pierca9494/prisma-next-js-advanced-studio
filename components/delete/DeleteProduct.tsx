"use client";

import { useRouter } from "next/navigation";
import { TrashIcon } from "lucide-react";
import { deleteProduct } from "@/lib/actions/product";

import { Button } from "@/components/ui/button";
export default function DeleteProduct({ id }: { id: string }) {
  const router = useRouter();
  const handleDelete = async () => {
    const didDelete = await deleteProduct(parseInt(id));
    if (didDelete) router.push("/search");
  };
  return (
    <div className="...">
      <div className="...">
        <div className="space-y-4">
          <div className="flex items-center justify-center">
            <TrashIcon className="h-12 w-12 text-red-500" />
          </div>
          <div className="space-y-2 text-center">
            <h2 className="text-2xl font-bold">Are you sure?</h2>
            <p className="text-gray-500 dark:text-gray-400">
              This action cannot be undone. This will permanently delete product
              #{id}.
            </p>
          </div>
        </div>
        <div className="flex justify-center gap-4">
          {/* add the onClick event */}
          <Button onClick={handleDelete} variant="destructive">
            Confirm Delete
          </Button>
          <Button
            onClick={() => router.push(`/product/view/${id}`)}
            variant="outline"
          >
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
}
