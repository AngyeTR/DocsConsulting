

import {Document, Page, View, Image, Text } from "@react-pdf/renderer"
import { image, contact1, contact2, contact3, icon1, icon2, icon3} from "./assests"
import { styles } from "./printPDFStyles"
import { coverage, contactInfo, contractual, USRepatriacion, beneficiarios, paragrafos, recomendaciones, legales } from "../text";

const PDFGenerator = (props) => {
    const {plan} = props
    return (
        <Document>
            <Page size={"LETTER"} style={styles.page} >
                <View style={styles.header} >
                    <Image src={image} style={{height:"2.5cm", width: "6cm"}}/>
                </View>
                <View>
                    <Text style={styles.title}>{plan.name}</Text>
                    <Text style={styles.textBold}>Código de Cliente: <Text style={styles.text}>{plan.clientId}</Text></Text>
                </View>
                
                <View style={{border: "2px solid #009fdf"}}>
                    <View style={{flexDirection: "row",}}>
                        <View style={styles.infoContainer}>
                            <Image src={icon1} style={styles.icon}/>
                            <Text style={styles.textBlue}>Edad</Text>
                            <Text style={styles.textBold}>{plan.clientAge}</Text>
                        </View>
                        <View style={styles.infoContainer}>
                            <Image src={icon2} style={styles.icon}/>
                            <Text style={styles.textBlue}>Nacionalidad</Text>
                            <Text style={styles.textBold}>{plan.nationality}</Text>
                        </View>
                        <View style={[styles.infoContainer, {paddingRight: 2}]}>
                            <Image src={icon3} style={styles.icon}/>
                            <Text style={[styles.textBlue, {fontSize: 9}]}>¿Cobertura para enfermedades preexistentes?</Text>
                            <Text style={styles.textBold}>{plan.preexist}</Text>
                        </View>    
                    </View>
                    <View style={{flexDirection: "row",}}>
                        <View style={styles.infoContainer}>
                            <Image src={icon1} style={styles.icon}/>
                            <Text style={styles.textBlue}>Fecha de Emisión</Text>
                            <Text style={styles.textBold}>{plan.issueDate}</Text>
                        </View>
                        <View style={styles.infoContainer}>
                            <Image src={icon1} style={styles.icon}/>
                            <Text style={styles.textBlue} >Fecha de Inicio</Text>
                            <Text style={styles.textBold}>{plan.start}</Text>
                        </View>
                        <View style={styles.infoContainer}>
                            <Image src={icon1} style={styles.icon}/>
                            <Text style={styles.textBlue}>Fecha Vencimiento</Text>
                            <Text style={styles.textBold}>{plan.exp}</Text>
                        </View>
                    </View>
                </View>  
                    <View>
                        <Text style={styles.section}>Contacto de Emergencia</Text>
                        <Text style={styles.text}> Tener en cuenta el prefijo del número de teléfono al momento de realizar la llamada.</Text>
                        <View style={{ flexDirection: "row",}}>
                            {
                                contactInfo.map((contact, index)=> {
                                    const url = index+1 == 1 ? contact1 : index+1 == 2 ? contact2 : contact3
                                    return(
                                        <View style={styles.contactContainer} key={index}>  
                                        <Image src={url} style={styles.icon}/>
                                        <Text style={styles.textBlue}>{contact.title}</Text>
                                        <Text style={styles.textBold}>{contact.data}</Text>
                                    </View> )
                                })
                            }
                        </View>  
                    </View>
                    <View>
                        <Text style={styles.section}>Coobertura</Text>
                        {
                            coverage.map((item, index)=>{
                                const color = (index+2)%2==0 ? "#f1f1f1" : "#fff"
                                return (<View key={index} style={{flexDirection: "row",
                                    backgroundColor: color, marginBottom: 2
                                }}>
                                    <Text style={styles.textList}>{item.item}</Text>
                                    <Text style={{fontSize: "10px",}}>{item.incluido}</Text>
                                </View>)
                            })
                        }
                    </View>
            </Page>
            <Page style={styles.page} size={"LETTER"}>
                <Text style={styles.section}>Requisito Contractual</Text>
                {
                    contractual.map((item, index)=> {
                        return(
                            <Text key={index} style={[styles.text, {textAlign: "justify"}]}>{item}</Text>
                        )})
                }
                <Text style={styles.listTitle}>
                    Cuando el fallecimiento se presente en Estados Unidos de America con Repatriacion del Cuerpo, cremacion y/o Repatriacion de cenizas: </Text>
                {
                    USRepatriacion.map((item, index)=> {
                        return(
                            <Text key={index} style={[styles.text, {textAlign: "justify", paddingLeft: 15}]}>{item}</Text>
                        )})
                }
                <Text style={styles.listTitle}>
                Servicios en los diferentes paises de Latinoamerica para los BENEFICIARIOS que fallecen en dichos paises</Text>
                {
                    beneficiarios.map((item, index)=> {
                        return(
                            <Text key={index} style={[styles.text, {textAlign: "justify", paddingLeft: 15}]}>{item}</Text>
                        )})
                }
                {
                    paragrafos.map((item, index)=> {
                        return(
                            <Text key={index} style={[styles.text, {textAlign: "justify"}]}>{item}</Text>
                        )})
                }
                <Text style={styles.listTitle}> Recomendaciones</Text>
                {
                    recomendaciones.map((item, index)=> {
                        return(
                            <Text key={index} style={[styles.text, {textAlign: "justify", paddingLeft: 15}]}>{item}</Text>
                        )})
                }
                <Text style={styles.listTitle}>Aspectos legales</Text>
                {
                    legales.map((item, index)=> {
                        return(
                            <Text key={index} style={[styles.text, {textAlign: "justify", paddingLeft: 15}]}>{item}</Text>
                        )})
                }
            </Page>

        </Document>
    )
}

export default PDFGenerator;


