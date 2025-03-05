import { StyleSheet } from "@react-pdf/renderer"

 export const styles = StyleSheet.create({
    page: { padding: "1cm",
        fontFamily: "Times-Roman"
     },
    header: { backgroundColor: "#009fdf",
        height: "2.5cm"
     },
    title: {
        fontSize: "16",
        fontWeight: "bold",
        marginTop: 10,
        marginBottom: 10
    },
    text: {
        fontSize: "12",
        fontWeight: "light",
        marginBottom: 5,
        paddingBottom: 1
    },
    textBold: {
        fontSize: "12",
        fontWeight: "bold",
        marginBottom: 5,
        paddingBottom: 1
    },
    textBlue: {
        fontSize: "12",
        fontWeight: "bold",
        color: "#6ec1e4",
        paddingBottom: 1 
    },
    textList: {
        fontSize: "10", paddingBottom: 2,  width: "90%",
        paddingBottom: 1
    },
    section: {
        backgroundColor: "#deddd9",
        fontSize: "16",
        fontWeight: "bold",
        marginTop: "15px",
        marginBottom: "15px",
        padding: 1
    }, 
    contactContainer: {
        width: "33.33%", 
         textAlign: "center", 
         alignContent: "center",
        alignItems: "center", 
         border: "1px solid #deddd9",
         paddingTop: 5,
         height: "2cm"
        },
    infoContainer: {
        width: "33.33%", 
         padding: 5,
         height: "2cm"
        },
    icon: {
        width: "0.5cm",
        height: "0.5cm",
        color: "#6ec1e4",
        padding: 1
    },
    listTitle: {
        marginTop: 10,
        marginBottom: 10,
        fontSize: "12",
        fontWeight: "bold",
    }
    }
  );
  