export default function ItemDetails({ completeItem }) {
  return (
    <>
      <div>
        <h1 className="text-2xl font-mono pt-3">Compete Items</h1>
        {completeItem.map((ele) => {
          return (
            <div className="pt-4 pl-20">
              <ul className="text-start">{ele}</ul>
            </div>
          );
        })}
      </div>
    </>
  );
}
