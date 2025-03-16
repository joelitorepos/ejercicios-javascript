let palitoDeHeladoDeAgua = 0.6, palitoDeHeladoDeCrema = 1, bombonHeladoMarcaHeladix = 1.6, bombonHeladoMarcaHeladivich = 1.7, bombonHeladoMarcaHelardo = 1.8, potecitoDeHeladoConConfites = 2.9, poteDeUnCuartoKG = 2.9, vuelto;
dinero = prompt("cuanto dinero tienes?");
nombre = prompt("cual es tu nombre?");

parseInt(dinero);

if (dinero >= potecitoDeHeladoConConfites){
    vuelto = dinero - potecitoDeHeladoConConfites;
    alert(`hola ${nombre} te alcanza para potecito de leche con confites o pote de 1/4 KG y te sobra de dinero ${vuelto}$`);
}
else if (dinero >= bombonHeladoMarcaHelardo){
    vuelto = dinero - bombonHeladoMarcaHelardo;
    alert(`hola ${nombre} te alcanza para bonbon de helado marca helardo y te sobra de dinero ${vuelto}$`);
}
else if (dinero >= bombonHeladoMarcaHeladivich){
    vuelto = dinero - bombonHeladoMarcaHeladivich;
    alert(`hola ${nombre} te alcanza para bonbon de helado marca heladovich y te sobra de dinero ${vuelto}$`);
}
else if (dinero >= bombonHeladoMarcaHeladix){
    vuelto = dinero - bombonHeladoMarcaHeladix;
    alert(`hola ${nombre} te alcanza para bonbon de helado marca heladix y te sobra de dinero ${vuelto}$`);

}
else if (dinero >= palitoDeHeladoDeCrema){
    vuelto = dinero - palitoDeHeladoDeCrema;
    alert(`hola ${nombre} te alcanza para palito de helado de crema y te sobra de dinero ${vuelto}$`);
}
else if (dinero >= palitoDeHeladoDeAgua){
    vuelto = dinero - palitoDeHeladoDeCrema;
    alert(`hola ${nombre} te alcanza para palito de helado de agua y te sobra de dinero ${vuelto}$`);
}
else {alert("no te alcanza para ningun helado");}

// parseInt() ES UNA FUNCION PARA CONVERTIR DE CADENA DE TEXTO A NUMERO