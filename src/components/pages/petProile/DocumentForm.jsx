"use client"

import React, { useState, useEffect } from 'react'
import Popup from '@/components/ui/Popup';
import PetService from '@/services/Pet.Service';
import UploadService from '@/services/Upload.service';

const DocumentForm = ( { pet_id } ) =>
{
  const [ isOpen, setIsOpen ] = useState( false );
  const [ docTypes, setDocTypes ] = useState( [] );
  const [ selectedFiles, setSelectedFiles ] = useState( null );
  const [ urlList, setUrlList ] = useState( [] );
  const [ doc, setDoc ] = useState( {
    doc_type: null
  } )

  const openPopup = () =>
  {
    setIsOpen( true );
  };

  const closePopup = () =>
  {
    setIsOpen( false );
  };


  const onCancel = () =>
  {
    closePopup();
    setUrlList( [] )
    setDoc( { doc_type: null } )
  }
  const handleFileChange = ( e ) =>
  {
    setSelectedFiles( Array.from( e.target.files ) )
  }

  const handleUploadFiles = () =>
  {
    if ( selectedFiles.length === 0 )
    {
      alert( 'Please select at least one file.' );
      return;
    }
    const formData = new FormData();
    selectedFiles.forEach( file =>
    {
      formData.append( 'files', file ); // Append each selected file to the FormData object
    } );

    UploadService.uploadFile( formData )
      .then( ( r ) =>
      {
        if ( r.data.status )
        {
          setUrlList( r.data.data )
          setUserData( { ...user, profile_image: r.data.data } )
          alert( "upload successfull!" )
        }
        else
        {
          console.log( r.data.message )
        }
      } )
      .catch( ( err ) =>
      {
        uploading.value = false;
        console.log( "err in upload=>", err );
      } );
  }

  const selectDocType = ( e ) =>
  {
    setDoc( { ...doc, doc_type: e.target.value } )
  }
  const handleSubmit = () =>
  {
    let payload = {
      url: urlList,
      pet_id: pet_id,
      doc_file_type: "PDF",
      doc_type: doc.doc_type,
    }
    PetService.savePetDocumnets( payload ).then( ( r ) =>
    {
      if ( r.data.status )
      {
        closePopup();
        setUrlList( [] )
        setDoc( { doc_type: null } )
      }
      else
      {
        alert( r.data.message )
      }
    } )
      .catch( ( err ) =>
      {
        console.log( errr )
      } )
  }
  const getDocumentType = () =>
  {
    PetService.getDocumentType().then( ( r ) =>
    {
      if ( r.data.status )
      {
        setDocTypes( r.data.data )
      }
      else
      {
        alert( r.data.message )
      }
    } )
      .catch( err =>
      {
        console.log( err );
      } )
  }
  useEffect( () =>
  {
    getDocumentType()
  }, [] )
  return (
    <>
      <div>
        <button onClick={openPopup}
          className="justify-center items-stretch w-[260px] border-[color:var(--Secondary-1,#5281A2)] flex gap-2 px-2 py-2 rounded-[40px] border-2 border-solid">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/4de235d9b77455aa5f7570010e4b94c0b4e21c41aa50f4e54f6bc6467e5db216?apiKey=22a36eade5734692978208fb0d2f5c62&"
            className="aspect-[1.08] object-contain object-center w-[15px] shrink-0 my-auto"
          />
          <div className='text-primary'>
            Update Medical History
          </div>
          <input
            type="file"
            id="file-input"
            className="hidden"
            accept="image/*"
            onChange={( e ) => handleFileChange( e )}
            multiple
          />
        </button>
      </div>
      <Popup isOpen={isOpen} onClose={closePopup} hideClose>
        <div className='w-[435px] py-2 flex  flex-col justify-center items-center bg-white'>
          <div className=' w-full  flex justify-center  mt-5 items-center text-xl text-primary'>
            Upload Files
          </div>
          <div className='w-[80%] mt-5'>
            <select value={doc.doc_type} onChange={( e ) => selectDocType( e )} className="rounded-lg px-4 py-3 w-full border-2 border-secondary2 text-lg text-primary">
              <option value="" disabled selected>Select documnet type</option>
              {
                docTypes && docTypes.map( ( type, index ) => (
                  <option key={"types" + index} value={type.id} >{type.name}</option>
                ) )
              }

            </select>
          </div>
          <div className='mt-2'>

          </div>
          <div className='w-[80%] flex   justify-between items-center'>
            <input
              type="file"
              id="file-input"
              accept="image/*"
              onChange={( e ) => handleFileChange( e )}
            />
            <button onClick={handleUploadFiles}
              className="justify-center items-stretch w-[260px] border-[color:var(--Secondary-1,#5281A2)] flex gap-2 px-2 py-2 rounded-[40px] border-2 border-solid">

              Upload
            </button>
          </div>
          <div className='flex  justify-between  w-[80%] m-auto mt-3'>
            <button onClick={onCancel} className="justify-center items-stretch w-[150px] border-[color:var(--Secondary-1,#5281A2)] flex gap-2 px-8 py-3 rounded-[86px] border-2 border-solid">

              {/* <button onClick={onCancel} className="text-slate-500 text-base font-bold leading-4 tracking-normal grow whitespace-nowrap"> */}
              Cancel
              {/* </div> */}
            </button>
            <button onClick={handleSubmit} className="text-white text-base font-bold  w-[150px] leading-4 tracking-normal justify-center items-center bg-slate-500 max-w-[155px] px-16 py-3 rounded-[86px]">
              Save
            </button>
          </div>
        </div>
      </Popup>

    </>

  )
}

export default DocumentForm