export function LeftColumn({ module, objective, tools }) {
    return (
    <>
        <div class="mb-7">
            <p class="text-2xl font-semibold"> Module </p>
            <p> {module} </p>
        </div>
        <div class="mb-7">
            <p class="text-2xl font-semibold"> Objective </p>
            <p> {objective} </p>
        </div>
        <div class="mb-7">
            <p class="text-2xl font-semibold"> Tools & Technologies</p>
            <p> {tools}</p>
        </div>
    </>
    );
}
