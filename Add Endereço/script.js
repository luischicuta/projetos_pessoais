let setEndereco = (endereco)=>{
    const {cidade, estado, pais} = endereco;

    const newEndereco = {
        cidade,
        estado,
        pais
    };
    
    console.log(`Minha cidade é ${newEndereco.cidade} e fica no estado de ${newEndereco.estado} no ${newEndereco.pais}.`);

}

setEndereco({cidade:'Cotia', estado:'São Paulo', pais:'Brasil'});