import { useContext } from "react";
import { StudContext } from "../providers/StudProvider";

function FavStudList() {
  const { studList, setStudList } = useContext(StudContext);

  const removeFavourite = (id) => {
    const updatedList = studList.map((s) => {
      if (s.id === id) {
        return { ...s, favStud: false };
      } else {
        return s;
      }
    });

    setStudList(updatedList);
  };

  const favourites = studList.filter((s) => s.favStud === true);

  return (
    <div className="min-h-screen bg-slate-50 px-5 py-10">
      <div className="max-w-4xl mx-auto">
        {favourites.length === 0 ? (
          <div className="bg-white border border-slate-200 rounded-2xl p-12 text-center shadow-sm">
            <div className="text-5xl mb-4">♡</div>

            <h2 className="text-xl font-bold text-slate-800">
              No favourite students yet
            </h2>

            <p className="text-slate-500 mt-2">
              You haven't added any students to your favourites. Visit the
              Student List and add your favourite students.
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {favourites.map((s, index) => {
              return (
                <div
                  key={s.id}
                  className="bg-white border border-slate-200 rounded-xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-sm hover:shadow-md transition duration-200"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center font-bold text-lg">
                      {s.studName.charAt(0).toUpperCase()}
                    </div>

                    <div>
                      <h3 className="font-semibold text-slate-800 text-lg">
                        {s.studName}
                      </h3>

                      <p className="text-sm text-slate-500">
                        Student ID: {s.id}
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => removeFavourite(s.id)}
                    className="px-5 py-2.5 rounded-lg bg-red-50 text-red-600 border border-red-200 font-medium text-sm hover:bg-red-100 transition duration-200"
                  >
                    Remove
                  </button>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default FavStudList;
