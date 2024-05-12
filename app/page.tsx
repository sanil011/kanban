'use client'
import { InitialData } from "@/Data/InitialData";
import KanbanCard from "@/components/ui/kanban-card";
export default function Home() {

  const handleDragEnd = (e:any,category:any) => {
    console.log(e.target,category)
  }
  const handleDragLeave = (e:any,category:any) => {
    console.log(e.target,category)
  }

  const handleDragStart = (e) => {
    console.log(e.target)

  }

  return (
    <main className="min-h-screen">


      <div className="grid grid-cols-4 max-w-[1280px] gap-8 h-[80vh] mx-auto justify-between mt-12">

        {InitialData().map((data, idx) => (
          <div
            key={idx}
            onDrop={(e) => handleDragEnd(e, data.listName)}
            onDragLeave={(e) => handleDragLeave(e, data.listName)}
            onDragStart={handleDragStart}
            className="w-full h-full">
            <h1>{data.listName}</h1>
            <div className="border border-gray-500 w-full h-full rounded-md">
              {data.listItems.map((item) => (
                <KanbanCard key={item.itemId} title={item.title} description={item.description}  />
              ))}
            </div>
          </div>
        ))}

      </div>
    </main>
  );
}
