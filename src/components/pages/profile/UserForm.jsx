"use client";
import React, { useEffect, useState } from "react";
import UserService from "@/services/User.Service";
import { useToast } from "@/components/ui/ToastProvider";
import MultipleSelect from "@/components/ui/MultipleSelect";
import ClinicService from "@/services/Clinic.service";
import UploadProfile from "@/components/auth/UploadProfile";
import TextInput from "@/components/ui/TextInput";
import PhoneNumberInput from "@/components/ui/PhoneNumberInput";
import Button from "@/components/ui/Button";
import MasterService from "@/services/Master.service";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import ReactPhoneInput from "@/components/ui/ReactPhoneInput";

const UserForm = ({ closePopup, user_id }) => {
  const showToast = useToast();
  const [clinics, setClinics] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [userData, setUserData] = useState({
    full_name: "",
    email: "",
    phone: "",
    user_type: "",
    profile_image: "",
    address: "",
    clinic_id: null,
    address_line_1: null,
    address_line_2: null,
    pin_code: null,
    city_id: null,
    state_id: null,
    country_id: null,
  });

  // Methods
  const profileUploaded = (filename) => {
    setUserData({ ...userData, profile_image: filename });
  };

  const formValueChanged = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const phoneNumberEntered = (phoneNumber) => {
    setUserData({ ...userData, phone: phoneNumber });
  };

  const clinicSelected = (e) => {
    setUserData({ ...userData, clinic_id: e });
  };

  const handleSubmit = () => {
    let payload = { ...userData };
    payload.id = user_id;
    UserService.updateUser(payload)
      .then((r) => {
        if (r.data.status) {
          onCancel();
        } else {
          console.log(r.data.message);
          alert(r.data.message);
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const onCancel = () => {
    closePopup();
    setUserData({
      full_name: "",
      email: "",
      phone: "",
      user_type: "",
      profile_image: "",
      address: "",
      address_line_1: null,
      address_line_2: null,
      pin_code: null,
      city_id: null,
      state_id: null,
      country_id: null,
    });
  };

  const getUserDataById = (id) => {
    UserService.getUserById(id)
      .then((r) => {
        if (r.data.status) {
          setUserData(r.data.data);
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const getClinics = () => {
    ClinicService.getData()
      .then((response) => {
        setClinics(response.data.data);
      })
      .catch((err) => console.log(err.message));
  };

  const getStates = () => {
    MasterService.getMastersByCode({ code: "STATE" })
      .then((response) => {
        if (!response.data.status)
          return showToast(response.data.message, "warning");
        setStates(response.data.data);
      })
      .catch((err) => console.log(err.message));
  };

  const stateSelected = (e) => {
    setUserData({ ...userData, state_id: e });
  };

  const getCities = (state_id) => {
    MasterService.getMastersByCode({ code: "CITY", state_id })
      .then((response) => {
        if (!response.data.status)
          return showToast(response.data.message, "warning");
        setCities(response.data.data);
      })
      .catch((err) => console.log(err.message));
  };

  const citySelected = (e) => {
    setUserData({ ...userData, city_id: e });
  };

  const phoneChanged = (a, b, c) => {
    console.log("a", a, "b", b, "c", c);
  };

  useEffect(() => {
    getUserDataById(user_id);
    getClinics();
    getStates();
    getCities();
  }, [user_id]);

  return (
    <>
      <div className="p-10 rounded-2xl  text-primary">
        <div className="flex flex-col gap-8">
          <h3 className="text-2xl text-center font-custom-roca">
            Update Profile
          </h3>

          <UploadProfile
            image={userData.profile_image}
            onUpload={profileUploaded}
          />

          <TextInput
            label={"Name"}
            placeholder={"John Doe"}
            name={"full_name"}
            value={userData.full_name}
            onChange={formValueChanged}
          />

          <ReactPhoneInput
            label={"Contact No"}
            placeholder={"9876543210"}
            value={userData.phone}
            onChange={(num) => {
              setUserData({ ...userData, phone: num });
            }}
          />

          {/* <PhoneInput
            value={userData.phone}
            onChange={(num) => setUserData({ ...userData, phone: num })}
            defaultCountry="IN"
            className="text-primary mt-1 p-4 border border-secondary rounded-md w-full focus:outline-none focus:ring h-12 bg-white"
          /> */}
          {/* <PhoneInput
            defaultCountry="IN"
            className="text-primary mt-1 p-4 border border-secondary rounded-md w-full focus:outline-none focus:ring h-12 bg-white"
          /> */}

          {/* <PhoneNumberInput
            label={"Contact No"}
            placeholder={"9876543210"}
            phoneNumber={userData.phone}
            name={"phone"}
            onPhoneNumberChange={phoneNumberEntered}
          /> */}

          <TextInput
            type="email"
            label={"Email"}
            placeholder={"johndoe@gmail.com"}
            name={"email"}
            value={userData.email}
            onChange={formValueChanged}
          />

          <MultipleSelect
            label={"Home Clinic"}
            options={clinics}
            optionLabel={"name"}
            optionValue={"id"}
            onSelect={clinicSelected}
            selectedValue={userData.clinic_id}
          />

          <TextInput
            label={"Address"}
            placeholder={"Andheri west, Mumbai"}
            name={"address"}
            value={userData.address}
            onChange={formValueChanged}
          />

          <TextInput
            placeholder={"Address line 1"}
            name={"address_line_1"}
            value={userData.address_line_1}
            onChange={formValueChanged}
          />

          <TextInput
            placeholder={"Address line 2"}
            name={"address_line_2"}
            value={userData.address_line_2}
            onChange={formValueChanged}
          />

          <TextInput
            placeholder={"Pin code"}
            name={"pin_code"}
            value={userData.pin_code}
            onChange={formValueChanged}
          />

          <MultipleSelect
            label={"State"}
            options={states}
            optionLabel="name"
            optionValue="id"
            onSelect={stateSelected}
            selectedValue={userData.state_id}
          />

          <MultipleSelect
            label={"City"}
            options={cities}
            optionLabel="name"
            optionValue="id"
            onSelect={citySelected}
            selectedValue={userData.city_id}
          />

          <div className="flex items-center gap-2 justify-between">
            <Button
              label="Cancel"
              color="secondary"
              className="text-secondary hover:text-white border-2 border-secondary bg-inherit hover:bg-secondary h-12"
              onClick={onCancel}
            />
            <Button
              label="Save"
              color="secondary"
              className="h-12"
              onClick={handleSubmit}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default UserForm;
