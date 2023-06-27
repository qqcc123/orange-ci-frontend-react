import { redirect } from "react-router-dom";
import { deleteContact } from "../contacts";
import React from 'react'

export async function action({ params }) {
  await deleteContact(params.contactId);
  return redirect("/");
}