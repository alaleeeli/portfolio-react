import TopTitle from "../Components/Project pages/TopTitle";
import LeftColumn from "../Components/Project pages/LeftColumn";
import RightColumn from "../Components/Project pages/RightColumn";
import Footer from "../Components/Footer";

export default function RunningTracker() {
    return (
        <>
            <div class="container mx-auto mt-5">
                
                <TopTitle 
                    title="Running Tracker (Android Application)." 
                    date="Jan 16, 2023" 
                    category="Mobile App development" />
                
                <div class="inline-flex items-center justify-center w-full">
                    <hr class="w-3/4 h-px my-8 bg-gray-200 border-0" />
                </div>

                <div class="flex flex-col md:flex-row gap-0 mt-3">
                    <div class="w-full md:w-1/3 text-left px-4 mr-2">
                        <LeftColumn 
                            module="Mobile Device Programming" 
                            objective="To design and implement a mobile application that functions as a basic Running Tracker." 
                            tools="Android Studio"/>
                    </div>

                    <RightColumn>
                        The Quantified Self or life-logging movement has been around for a number of years, but
                        advances in mobile and wearable computing have increased the ability of people to collect
                        data about their physical activities. The most common of these track activity as it happens for
                        fitness, health or gamification purposes, for example displaying comparisons with previous
                        activities, keeping track of best time or longest distances.
                        <br/><br/>
                        The goal of this project is to design and implement a mobile application that functions as
                        a basic Running Tracker, in that it should allow the user to track their movement when they
                        decide to walk, run or jog, principally by logging the change in physical location using GPS.
                    </RightColumn>
                </div>
            </div>

            <Footer />
        </>
    )
}

