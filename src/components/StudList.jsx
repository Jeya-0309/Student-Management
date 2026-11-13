import { useContext } from "react";
import { StudContext } from "../providers/StudProvider";

function StudList() {
  const { studList, setStudList } = useContext(StudContext);

  const addFavourite = (id) => {
    const updatedList = studList.map((s) => {
      if (s.id === id) {
        return { ...s, favStud: true };
      } else {
        return s;
      }
    });

    setStudList(updatedList);
  };

  return (
    <div className="min-h-screen bg-slate-50 px-5 py-10">
      <div className="max-w-4xl mx-auto">
        {/* Student Cards */}

        <div className="space-y-4">
          {studList.map((s, index) => {
            return (
              <div
                key={s.id}
                className="bg-white border border-slate-200 rounded-xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-sm hover:shadow-md transition duration-200"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold text-lg">
                    {s.studName.charAt(0).toUpperCase()}
                  </div>

                  <div>
                    <h3 className="font-semibold text-slate-800 text-lg">
                      {s.studName}
                    </h3>

                    <p className="text-sm text-slate-500">Student ID: {s.id}</p>
                  </div>
                </div>

                <button
                  onClick={() => addFavourite(s.id)}
                  disabled={s.favStud}
                  className={`px-5 py-2.5 rounded-lg font-medium text-sm transition duration-200 ${
                    s.favStud
                      ? "bg-red-50 text-red-600 border border-red-200 cursor-not-allowed"
                      : "bg-indigo-600 text-white hover:bg-indigo-700 shadow-sm"
                  }`}
                >
                  {s.favStud ? "✓ Added to Favourite" : "+ Add to Favourite"}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default StudList;
