import PetService from "@/services/Pet.Service";
import React, { useEffect, useState } from "react";

const PetDocumentList = ( { doc_type_name, pet_id } ) =>
{
    const [ docList, setDocList ] = useState( [] );


    const getPetDocument = ( { doc_type_name, pet_id } ) =>
    {
        PetService.getPetDocuments( { pet_id, doc_type: doc_type_name } ).then( ( r ) =>
        {
            if ( r.data.status )
            {
                setDocList( r.data.data )
            }
            else
            {
                alert( r.data.message )
            }
        } )
            .catch( ( err ) =>
            {
                console.log( err );
            } )

    }
    useEffect( () =>
    {
        if ( pet_id && doc_type_name )
        {
            getPetDocument( { doc_type_name, pet_id } )
        }

    }, [ doc_type_name, pet_id ] )


    return (
        <>
            <div className="w-full">

            </div>
        </>
    )

}

export default PetDocumentList;