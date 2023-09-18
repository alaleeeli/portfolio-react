export default function RightColumn({ children }) {
    return (
        <div class="w-full md:w-2/3 text-left px-4">
            <p class="text-2xl font-semibold"> About </p>
            <p class=" mb-5 text-lg"> {children} </p>
        </div>
    );
}
