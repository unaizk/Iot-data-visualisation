import { PrismaClient } from '@prisma/client';



const prisma = new PrismaClient();



const dataFetching = async(req,res) =>{
    try {
        const receivedData = req.query;

       
        const jsonData = {
            id: receivedData.ID,
            time: receivedData.Time,
            data: receivedData.Data
        };
        
        if (jsonData.id === '2_digit_number') {
            console.log(jsonData.time);
            await prisma.twoDigitNumber.create({
                data : {
                    data : jsonData.data ,
                    time : jsonData.time
                }
            })
        } 

        if (jsonData.id === '3_digit_number') {
            console.log(jsonData.time);
            await prisma.threeDigitNumber.create({
                data : {
                    data : jsonData.data ,
                    time : jsonData.time
                }
            })
        } 

        if (jsonData.id === '4_digit_number') {
            console.log(jsonData.time);
            await prisma.fourDigitNumber.create({
                data : {
                    data : jsonData.data ,
                    time : jsonData.time
                }
            })
        } 

        if (jsonData.id === '2_digit_letters') {
            console.log(jsonData.time);
            await prisma.twoDigitLetter.create({
                data : {
                    data : jsonData.data ,
                    time : jsonData.time
                }
            })
        } 

        if (jsonData.id === '4_digit_letters') {
            console.log(jsonData.time);
            await prisma.fourDigitLetter.create({
                data : {
                    data : jsonData.data ,
                    time : jsonData.time
                }
            })
        } 

        if (jsonData.id === 'concat_4_values') {
            console.log(jsonData.time);
            await prisma.concatFourValues.create({
                data : {
                    data : jsonData.data ,
                    time : jsonData.time
                }
            })
        } 
        if (jsonData.id === 'concat_2_values') {
            console.log(jsonData.time);
            await prisma.concatTwoValues.create({
                data : {
                    data : jsonData.data ,
                    time : jsonData.time
                }
            })
        } 

        console.log("updates every data succefully");

    } catch (error) {
        console.log(error);
        return  res.status(500).json("Internal server error")
    }
}


export {
    dataFetching
}