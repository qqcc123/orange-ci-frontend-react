import { Outlet, Link, useLoaderData, Form, redirect, useSubmit, NavLink, useNavigation } from "react-router-dom";
import { getContacts, createContact } from "../contacts";
import { useEffect } from "react";
import * as React from 'react'

export default function Root() {
    const { contacts, q } : any = useLoaderData();
    const navigation = useNavigation();
    const submit = useSubmit();

    const searching =
      navigation.location &&
      new URLSearchParams(navigation.location.search).has(
        "q"
      );

    useEffect(() => {
      let element: any = document.getElementById("q")
      element.value = q | 1;
    }, [q]);

  return (
    <>
      <div id="sidebar">
        <h1>React Router Contacts</h1>
        <div>
          <Form  id="search-form" role="search">
            <input
              id="q"
              className={searching ? "loading" : ""}
              aria-label="Search contacts"
              placeholder="Search"
              type="search"
              name="q"
              defaultValue={q}
              onChange={(event) => {
                console.log("-----onChange-------", event.currentTarget.form)
                const isFirstSearch = q == null;
                submit(event.currentTarget.form, {
                  replace: !isFirstSearch,
                });
              }}
            />
            <div
              id="search-spinner"
              aria-hidden
              hidden={!searching}
            />
            <div
              className="sr-only"
              aria-live="polite"
            ></div>
          </Form >
          <Form method="post">
            <button type="submit">New</button>
          </Form>
        </div>
        <nav>
           {contacts && contacts.length ? (
            <ul>
              {contacts.map((contact : any) => (
                <li key={contact.id}>
                  <NavLink
                    to={`contacts/${contact.id}`}
                    className={({ isActive, isPending }) =>
                      isActive
                        ? "active"
                        : isPending
                        ? "pending"
                        : ""
                    }
                  >
                    <Link to={`contacts/${contact.id}`}>
                      {contact.first || contact.last ? (
                        <>
                          {contact.first} {contact.last}
                        </>
                      ) : (
                        <i>No Name</i>
                      )}{" "}
                      {contact.favorite && <span>★</span>}
                    </Link>
                  </NavLink>
                </li>
              ))}
            </ul>
          ) : (
            <p>
              <i>No contacts</i>
            </p>
          )}
        </nav>
      </div>
      <div id="detail"
        className={
          navigation.state === "loading" ? "loading" : ""
        }>
        <Outlet />
      </div>
    </>
  );
}

export async function action() {
  const contact = await createContact();
  console.log("---root----action", contact)
  // return { contact };
  return redirect(`/contacts/${contact.id}/edit`);
}

export async function loader({ request } : any) {
    const url = new URL(request.url);
    const q = url.searchParams.get("q");
    const contacts = await getContacts(q);
    console.log("---root----loader: ", contacts, url)
    return { contacts, q };
}