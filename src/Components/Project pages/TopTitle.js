export function TopTitle({ title, date, category }) {
    return (
        <div class="px-4">
            <p class="text-left text-3xl font-bold mt-10 mb-5">
                {title}
            </p>
            <div class="flex">
                <div class="flex items-center mr-10">
                    <img src="assets/icons/calendar.png" alt="calender" class="h-5" />
                    <span class="ml-2 leading-none">{date}</span>
                </div>
                <div class="flex items-center">
                    <img src="assets/icons/price-tag.png" alt="tag" class="h-6" />
                    <span class="ml-2 leading-none">{category}</span>
                </div>
            </div>
        </div>
    );
}
