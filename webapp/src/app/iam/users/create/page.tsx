import BreadcrumbCreate from "./_breadcrumb/page";
import CreataTabs from "./_tabs/page";

export default function Create() {

  return (
    <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
      <div className="flex flex-col items-start">
        <BreadcrumbCreate />
      </div>
      <div className="">
        <CreataTabs />
      </div>
    </main>

  )
}