const crop=document.querySelector('#crop');
const img=document.querySelector("#img");
const title=document.querySelector("h1");
const text=document.querySelector('#text');
const pagetext={
    maize:{
        variety:'Maize',
        image:'./Assets/Jowar.jpg',
        text:`Short-, mid- and long-term maize varieties

        Select the duration that is suitable for your climate, resources, and purpose of production.
        
        • Full season maturity: Genotypes mature at 105-110 days or more. They are either rainfed or irrigated. E.g.: Ganga-5, Ganga-9, Ganga -2, Deccan 103, Shakti, Proagro 311.
        
        • Medium maturity: Varieties need 95-100 days to mature and suit well to regions.
        
        Examples: Vikram - high tolerance to drought and downy mildew (90-95 days), Vijay - resistance to foliar diseases.
        
        • Early maturity: Varieties need 89-90 days to mature. Suitable either in monocropping or intercropping with assured rainfall.`,    
    },
    rice:{
        variety:'Rice',
        image:'./Assets/Media/Rice.jpg',
        text:`Choose a variety that fits your needs,

        • Long-duration varieties (160 days and longer) are suitable for irrigated areas.
        
        • Medium-duration varieties (120-140 days) are suitable for both rainfed and irrigated areas.
        
        • Short-duration varieties (less than 120 days) are suitable for drought-prone areas or for double cropping.
        
        Crop height:
        
        • Tall varieties (1.4 m and taller) are suitable for flood-prone and unleveled fields, but lodging may be a problem.
        
        • Medium-height varieties (1-1.2 m) are suitable for most areas and are less susceptible to lodging when fertilizer is used.
        
        • Short varieties are best suited for level fields, especially in irrigated areas. They are normally less than 1 m in height.`,
    },
    potato:{
        variety: 'Potato',
        image:'./Assets/Potato_potato.jpg',
        text:`Healthy planting material,

        Quality of the cultivars and healthy seed tubers are the primary requirements for a successful crop.
        
        • For planting, remove potato seeds from cold storage.
        
        • Select healthy, medium- or small-sized tubers
        
        • The ideal tuber size for planting is about 2.5 cm in diameter (25-40 grams).
        
        • Smaller sized tubers should be rejected for planting as they may carry diseases.
        
        • Treat tubers with fungicides before letting them sprout.
        
        • Break the dormancy if necessary with chemical treatment.
        
        • Cut large tubers for planting as the last step.`,
    },
    tomato:{
        variety: 'Tomato',
        image:'Assets/cropimg/Tomato_je.jpg',
        text:`Early-and late- varieties,

        • "Early" varieties have a short growing season and can be harvested in less than 60-70 days. E.g.: Hissar Arun; Krishna; KS-2; Pusa early dwarf; Pusa Rubi; Pusa red plum; HS-102; Hisar talima; Punjab Kesri; Rajni; NS-501.
        
        • "Late" varieties typically are ready to harvest in more than 85 days. E.g.: HS-110; CO-2; CO-3 (Marutham); Arka Ahuti; Arka Abha; Arka Alok; COTH-1; Arka Shrestha; ARTH-3; ARTH-4; Arka Abhijit; Arka Saurabh; Arka Vishal; Arka Vikas; Arka Ashis; Swarna Lalima; Swarna Naveen.
        
        Remember that new varieties may be released every year or season, so be sure to talk to your neighbors, consultant, seed company representatives, university specialists, and retailers about novelties and varieties that are best suited for your purposes and environmental conditions.`,
    },
};
function changeText(){
    const cropval=crop.value;
    
    text.innerHTML=pagetext[cropval].text;
    img.src=pagetext[cropval].image;
    title.innerText=`${pagetext[cropval].variety} varieties`;
}

