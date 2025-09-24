import skills from "../data-files/skills";

export default function Skills(){
    return (
        <ul>
            {skills.map(p => (
                <li>{p.type} <br/>
                    <ul>
                        {p.skills.map(s => (
                            <li>{s.name} ({s.level})</li>
                        ))}
                    </ul>
                </li>
            ))}
        </ul>
    );
}


        // <section class="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        //   {/* Card */}
        //   <div class="p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
        //     <h3 class="text-lg font-bold mb-2">Users</h3>
        //     <p class="text-2xl font-semibold">1,240</p>
        //   </div>

        //   <div class="p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
        //     <h3 class="text-lg font-bold mb-2">Revenue</h3>
        //     <p class="text-2xl font-semibold">$12,400</p>
        //   </div>

        //   <div class="p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
        //     <h3 class="text-lg font-bold mb-2">Orders</h3>
        //     <p class="text-2xl font-semibold">320</p>
        //   </div>
        // </section>
