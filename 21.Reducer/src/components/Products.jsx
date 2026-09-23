
function Productcard() {
    const data = [
        {
            id: 1,
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3j93ffxP4W5Zw6O1-62OI4LQo_foxuoe7hBjMWft57Q&s",
            name: "koenigsegg",
            paragraph:
                "This is a short and simple paragraph describing the amazing features of this product.",
        },
        {
            id: 2,
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmpHQW22TV584UPyY3z1fh0qsQai_QbC071h5s8qYteQ&s=10",
            name: "Porsche",
            paragraph:
                "This is a short and simple paragraph describing the amazing features of this product.",
        },
        {
            id: 3,
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMGeNgZFHxTUGVD2ZsbDdlRi2_jrOgSn-vWOT6izsMPw&s=10",
            name: "bhugatti",
            paragraph:
                "This is a short and simple paragraph describing the amazing features of this product.",
        },
    ];
    return (
        <>

            {data.map((ele, idx) => {
                return (
                    <>
                        <div
                            key={idx}
                            className="group flex flex-col justify-between p-4 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300"
                        >
                            <div className="max-w-sm overflow-hidden rounded-xl bg-white shadow-md transition-all hover:-translate-y-1 hover:shadow-lg">
                                <img
                                    src={ele.src}
                                    alt={ele.name || "Card image"}
                                    className="h-48 w-full object-cover"
                                />

                                <div className="p-5">
                                    <h3 className="text-lg font-semibold text-gray-900">{ele.name}</h3>
                                    <p className="mt-2 text-sm leading-relaxed text-gray-600">
                                        {ele.paragraph}
                                    </p>

                                    <button className="w-full mt-4 flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm shadow-indigo-200 transition-all duration-200 hover:bg-indigo-700 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                                        Add to cart
                                    </button>  </div>
                            </div>
                        </div>
                    </>
                );
            })}
        </>
    );
}

export default Productcard;
