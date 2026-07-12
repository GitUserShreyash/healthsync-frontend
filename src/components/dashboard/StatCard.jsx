function StatCard({title, value, icon, unit}) {
    const Icon = icon;

    return(
        <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="flex justify-between items-start">
                <div>
                    <p className="text-slate-500 text-sm">{title}</p>

                    <h2 className="text-3xl font-bold mt-2">
                        {value}
                        {unit && (
                            <span className="text-lg text-slate-500 ml-1">
                                {unit}
                            </span>
                        )}
                    </h2>
                </div>

                {Icon && (
                    <div className="text-emerald-600 text-3xl">
                        <Icon/>
                    </div>
                )}
            </div>
        </div>
    )
}

export default StatCard;