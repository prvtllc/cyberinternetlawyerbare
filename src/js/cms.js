import React from "react";
import CMS from "netlify-cms";

import HomePreview from "./cms-preview-templates/home";
import PostPreview from "./cms-preview-templates/post";
import DefamationPreview from "./cms-preview-templates/defamation";
import ForensicsPreview from "./cms-preview-templates/forensics";
import ComputerCrimePreview from "./cms-preview-templates/computer-crime";
import DomainNamesPreview from "./cms-preview-templates/domain-names";
import IntellectualPropertyPreview from "./cms-preview-templates/intellectual-property";
import ProductsPreview from "./cms-preview-templates/professionals";
import ValuesPreview from "./cms-preview-templates/practice";
import ContactPreview from "./cms-preview-templates/contact";


// Example of creating a custom color widget
class ColorControl extends React.Component {
  render() {
    return <input
        style={{height: "80px"}}
        type="color"
        value={this.props.value}
        onInput={(e) => this.props.onChange(e.target.value)}
    />;
  }
}

CMS.registerPreviewStyle("/css/main.css");
CMS.registerPreviewTemplate("home", HomePreview);
CMS.registerPreviewTemplate("post", PostPreview);
CMS.registerPreviewTemplate("defamation", DefamationPreview);
CMS.registerPreviewTemplate("forensics", ForensicsPreview);
CMS.registerPreviewTemplate("computer-crime", ComputerCrimePreview);
CMS.registerPreviewTemplate("domain-names", DomainNamesPreview);
CMS.registerPreviewTemplate("intellectual-property", IntellectualPropertyPreview);
CMS.registerPreviewTemplate("professionals", ProductsPreview);
CMS.registerPreviewTemplate("values", ValuesPreview);
CMS.registerPreviewTemplate("contact", ContactPreview);
CMS.registerWidget("color", ColorControl);
