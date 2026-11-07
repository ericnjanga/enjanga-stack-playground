"use client";

import HeroDemo from "@/components/HeroDemo";
import DemoFooter from "@/components/DemoFooter";
import { useGenericFormInput } from "@/hooks/useFormInput";
import { getDemoByRoute } from "@/data/demos";

const demo = getDemoByRoute("/react-form-controls");

export default function ReactFormControlsPage() {
  const firstNameInput = useGenericFormInput("");
  const lastNameInput = useGenericFormInput("");
  const passwordInput = useGenericFormInput("");
  const cityInput = useGenericFormInput("");
  const provinceInput = useGenericFormInput("");
  const postalCodeInput = useGenericFormInput("");

  return (
    <>
      {demo && <HeroDemo title={demo.title} description={demo.description} />}

      <section className="demo-main">
        <div className="wrapper wrapper-main">
          <div className="mb-8 rounded-xl border border-slate-700 bg-slate-900/60 p-4 text-sm break-words text-slate-300">
            {firstNameInput.value} —{lastNameInput.value} —{passwordInput.value ? "••••••••" : ""}{" "}
            —{cityInput.value} —{provinceInput.value} —{postalCodeInput.value}
          </div>

          <form className="w-full">
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-xs font-bold mb-2"
                  htmlFor="grid-first-name"
                >
                  First Name
                </label>
                <input
                  {...firstNameInput}
                  className="form-control mb-3 border-red-400"
                  aria-describedby="first-name-hint"
                  id="grid-first-name"
                  type="text"
                  placeholder="Jane"
                />
                <p id="first-name-hint" className="text-sm text-red-300">
                  Please fill out this field.
                </p>
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label
                  className="block uppercase tracking-wide text-xs font-bold mb-2"
                  htmlFor="grid-last-name"
                >
                  Last Name
                </label>
                <input
                  {...lastNameInput}
                  className="form-control mb-3"
                  id="grid-last-name"
                  type="text"
                  placeholder="Doe"
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Password
                </label>
                <input
                  {...passwordInput}
                  className="form-control mb-3"
                  id="grid-password"
                  type="password"
                  placeholder="******************"
                />
                <p className="text-sm text-slate-400">
                  Make it as long and as crazy as you&apos;d like
                </p>
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-8">
              <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-xs font-bold mb-2"
                  htmlFor="grid-city"
                >
                  City
                </label>
                <input
                  {...cityInput}
                  className="form-control mb-3"
                  id="grid-city"
                  type="text"
                  placeholder="Albuquerque"
                />
              </div>
              <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-xs font-bold mb-2"
                  htmlFor="grid-state"
                >
                  Province
                </label>
                <div className="relative">
                  <select
                    {...provinceInput}
                    className="form-control mb-3 appearance-none pr-9"
                    id="grid-state"
                  >
                    <option value="AB">Alberta</option>
                    <option value="BC">British Columbia</option>
                    <option value="MB">Manitoba</option>
                    <option value="NB">New Brunswick</option>
                    <option value="NL">Newfoundland and Labrador</option>
                    <option value="NS">Nova Scotia</option>
                    <option value="ON">Ontario</option>
                    <option value="PE">Prince Edward Island</option>
                    <option value="QC">Quebec</option>
                    <option value="SK">Saskatchewan</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-slate-400">
                    <svg
                      className="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-xs font-bold mb-2"
                  htmlFor="grid-zip"
                >
                  Postal code
                </label>
                <input
                  {...postalCodeInput}
                  className="form-control mb-3"
                  id="grid-zip"
                  type="text"
                  placeholder="L6A 0Y6"
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-8">
              <div className="w-full ml-auto md:w-1/3 px-3 mb-6 md:mb-0">
                <button className="button-primary w-full">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>

      <DemoFooter articles={demo?.relatedArticle} />
    </>
  );
}
