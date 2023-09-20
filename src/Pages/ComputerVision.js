import TopTitle from "../container/ProjectPages/TopTitle";
import LeftColumn from "../container/ProjectPages/LeftColumn";
import RightColumn from "../container/ProjectPages/RightColumn";
import DownloadButton from '../components/Button'
import Footer from "../components/Footer";

export default function ComputerVision() {
    return (
        <>
            <div class="container mx-auto mt-5">
                
                <TopTitle 
                    title="Image Classification and Segmentation." 
                    date="May 17, 2023" 
                    category="Machine Learning / Computer Vision" />
                
                <div class="inline-flex items-center justify-center w-full">
                    <hr class="w-3/4 h-px my-8 bg-gray-200 border-0" />
                </div>

                <div class="flex flex-col md:flex-row gap-0 mt-3">
                    <div class="w-full md:w-1/3 text-left px-4 mr-2">
                        <LeftColumn 
                            module="Computer Vision" 
                            objective="To build and Train a Convolutional Neural Network (CNN) to perform the tasks of image classification and segmentation using a flower dataset." 
                            tools="MatLab"/>
                        <DownloadButton title="Download Paper" path="assets/pdfs/Computer_Vision_coursework.pdf" />
                    </div>

                    <RightColumn>
                        Image classification is defined as the process of labeling an image, 
                        those labels are categorized according to the information collected from the images. 
                        While Image segmentation is the task of dividing an image into parts or regions which are called segments, 
                        the partitioning is based on features of the pixels. Multiple techniques can perform such tasks, 
                        but deep learning is the best for these tasks since it employs CNNs to extract and learn features from the images. 
                        The models consist of numerous layers each extracting various characteristics from the input image.
                        <br/><br/>
                        The dataset used to train the models was provided by the University of Oxford, 
                        it consists of 17 different types of popular flowers in the UK, each with 80 images, 
                        making it a total of 1360 images, and all images have different characteristics including 
                        texture, shape, and colors [5]. All of the images will be used for the classification task, 
                        whereas only the Daffodil flower will be used for the segmentation.
                        <br/><br/>
                        The DarkNet-53 model was used and retrained on 17 flower species to perform the task of image classification. 
                        However, to perform the task of image segmentation a new CNN were built and it consists of 4 main components 
                        including, input layer, downsampling layers, upsampling layers, and a classification layer.
                        <br/><br/>
                        The classification network was hard to train and computationally expensive, 
                        due to the high number of training data. However, it achieved a high accuracy of 89.22% when testing it on the validation data.
                        Training the segmentation network was faster due less images being trained,
                        and achieved an accuracy of 88.09% on training data and 81.101% on unseen data.
                    </RightColumn>
                </div>
            </div>

            <Footer title={"Follow me"} lineWidth={'3/4'}/>
        </>
    )
}

