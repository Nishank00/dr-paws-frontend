import PetService from "@/services/Pet.Service";
import React, { useEffect, useState } from "react";
import DocCard from "./DocCard";
require( 'dotenv' ).config()

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
            <div className="w-full grid">
                <div className="text-primary text-lg text-center md:text-left font-custom-open-sans font-bold leading-6 tracking-normal mt-8 max-md:max-w-full">
                    Past Diagnostic Reports
                </div>
                <div className="w-full grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  gap-2">
                    {
                        docList && docList.map( ( doc, index ) => (
                            <DocCard key={"doclist" + index} {...doc} url={`${ process.env.NEXT_PUBLIC_API_BASE_URL }/doc.url`} />
                        ) )
                    }
                </div>
            </div>
        </>
    )

}

export default PetDocumentList;