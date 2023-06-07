/**
 * Componente che potremmo usare per i pulsanti, ad esempio della sidebar,
 * per effetuare il redirect ad altre pagine
 */

import React from "react";
import {Link} from "react-router-dom"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

export default function Button({icon, description, url}) {
    return <li>
        <Link to={url}>
            <FontAwesomeIcon icon={icon}/>
            {description}
        </Link>
    </li>
}