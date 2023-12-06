import React from 'react';
import { Row, Col } from 'react-bootstrap';

import Breadcrumb from '../../common/breadcrumb';
import PtToggle from '../../features/elements/toggle';

function TogglesPage () {
    return (
        <>
            <Breadcrumb current="Toggles" paths={ [ {
                name: "Home",
                url: "/"
            }, {
                name: "Elements",
                url: "/elements"
            } ] } />

            <Row>
                <Col lg={ 6 }>
                    <h4>Default</h4>

                    <div className="toggle toggle-primary">
                        <PtToggle label="Curabitur eget leo at velit imperdiet vague iaculis vitaes?" defaultCollapsed={ false }>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pellentesque neque eget diam posuere porta. Quisque ut nulla at nunc <a href="#vehicula" onClick={ e => e.preventDefault() }>vehicula</a> lacinia. Proin adipiscing porta tellus, ut feugiat nibh adipiscing sit amet.</p>
                        </PtToggle>

                        <PtToggle label="Curabitur eget leo at imperdiet vague iaculis vitaes?">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget leo at velit imperdiet varius. In eu ipsum vitae velit congue iaculis vitae at risus. Nullam tortor nunc, bibendum vitae semper a, volutpat eget massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer fringilla, orci sit amet posuere auctor.</p>
                        </PtToggle>

                        <PtToggle label="Curabitur eget leo at velit imperdiet vague iaculis vitaes?">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget leo at velit imperdiet varius. In eu ipsum vitae velit congue iaculis vitae at risus. Nullam tortor nunc, bibendum vitae semper a, volutpat eget massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer fringilla, orci sit amet posuere auctor, orci eros pellentesque odio, nec pellentesque erat ligula nec massa. Aenean consequat lorem ut felis ullamcorper posuere gravida tellus faucibus. Maecenas dolor elit, pulvinar eu vehicula eu, consequat et lacus. Duis et purus ipsum. In auctor mattis ipsum id molestie. Donec risus nulla, fringilla a rhoncus vitae, semper a massa. Vivamus ullamcorper, enim sit amet consequat laoreet, tortor tortor dictum urna, ut egestas urna ipsum nec libero. Nulla justo leo, molestie vel tempor nec, egestas at massa. Aenean pulvinar, felis porttitor iaculis pulvinar, odio orci sodales odio, ac pulvinar felis quam sit.</p>
                        </PtToggle>
                    </div>
                </Col>
            </Row>

            <h4>Colors</h4>
            <Row>
                { [ "primary", "secondary", "tertiary", "quaternary" ].map( color => (
                    <Col lg={ 6 } xl={ 3 } key={ color }>
                        <div className={ `toggle toggle-${ color }` }>
                            <PtToggle label="Curabitur eget leo at." defaultCollapsed={ false }>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </PtToggle>

                            <PtToggle label="Curabitur eget leo.">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </PtToggle>

                            <PtToggle label="Curabitur eget leo at.">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </PtToggle>
                        </div>
                    </Col>
                ) ) }
            </Row>

            <Row>
                <Col lg={ 3 }>
                    <h4>Small</h4>

                    <div className="toggle toggle-primary toggle-sm">
                        <PtToggle label="Curabitur eget leo at." defaultCollapsed={ false }>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget leo at velit imperdiet varius. In eu ipsum vitae velit congue iaculis vitae at risus. Nullam tortor nunc, bibendum vitae semper a, volutpat eget massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer fringilla, orci sit amet posuere auctor, orci eros pellentesque odio, nec pellentesque erat ligula nec massa. Aenean consequat lorem </p>
                        </PtToggle>

                        <PtToggle label="Curabitur eget leo.">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget leo at velit imperdiet varius. In eu ipsum vitae velit congue iaculis vitae at risus. Nullam tortor nunc, bibendum vitae semper a, volutpat eget massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer fringilla, orci sit amet posuere auctor.</p>
                        </PtToggle>

                        <PtToggle label="Curabitur eget leo at.">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget leo at velit imperdiet varius. In eu ipsum vitae velit congue iaculis vitae at risus. Nullam tortor nunc, bibendum vitae semper a, volutpat eget massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer fringilla, orci sit amet posuere auctor, orci eros pellentesque odio, nec pellentesque erat ligula nec massa. Aenean consequat lorem ut felis ullamcorper posuere gravida tellus faucibus. Maecenas dolor elit, pulvinar eu vehicula eu, consequat et lacus. Duis et purus ipsum. In auctor mattis ipsum id molestie. Donec risus nulla, fringilla a rhoncus vitae, semper a massa. Vivamus ullamcorper, enim sit amet consequat laoreet, tortor tortor dictum urna, ut egestas urna ipsum nec libero. Nulla justo leo, molestie vel tempor nec, egestas at massa. Aenean pulvinar, felis porttitor iaculis pulvinar, odio orci sodales odio, ac pulvinar felis quam sit.</p>
                        </PtToggle>
                    </div>
                </Col>

                <Col lg={ 3 }>
                    <h4>Default</h4>

                    <div className="toggle toggle-primary">
                        <PtToggle label="Curabitur eget leo at." defaultCollapsed={ false }>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget leo at velit imperdiet varius. In eu ipsum vitae velit congue iaculis vitae at risus. Nullam tortor nunc, bibendum vitae semper a, volutpat eget massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer fringilla, orci sit amet posuere auctor, orci eros pellentesque odio, nec pellentesque erat ligula nec massa. Aenean consequat lorem </p>
                        </PtToggle>

                        <PtToggle label="Curabitur eget leo.">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget leo at velit imperdiet varius. In eu ipsum vitae velit congue iaculis vitae at risus. Nullam tortor nunc, bibendum vitae semper a, volutpat eget massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer fringilla, orci sit amet posuere auctor.</p>
                        </PtToggle>

                        <PtToggle label="Curabitur eget leo at.">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget leo at velit imperdiet varius. In eu ipsum vitae velit congue iaculis vitae at risus. Nullam tortor nunc, bibendum vitae semper a, volutpat eget massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer fringilla, orci sit amet posuere auctor, orci eros pellentesque odio, nec pellentesque erat ligula nec massa. Aenean consequat lorem ut felis ullamcorper posuere gravida tellus faucibus. Maecenas dolor elit, pulvinar eu vehicula eu, consequat et lacus. Duis et purus ipsum. In auctor mattis ipsum id molestie. Donec risus nulla, fringilla a rhoncus vitae, semper a massa. Vivamus ullamcorper, enim sit amet consequat laoreet, tortor tortor dictum urna, ut egestas urna ipsum nec libero. Nulla justo leo, molestie vel tempor nec, egestas at massa. Aenean pulvinar, felis porttitor iaculis pulvinar, odio orci sodales odio, ac pulvinar felis quam sit.</p>
                        </PtToggle>
                    </div>
                </Col>

                <Col lg={ 6 }>
                    <h4>Large</h4>

                    <div className="toggle toggle-primary toggle-lg">
                        <PtToggle label="Curabitur eget leo at velit imperdiet vague iaculis vitaes?" defaultCollapsed={ false }>
                            <p>Donec tellus massa, tristique sit amet condim vel, facilisis quis sapien. Praesent id enim sit amet odio vulputate eleifend in in tortor. Donec tellus massa, tristique sit amet condim vel, facilisis quis sapien.</p>
                            <img className="pull-left" width="150" height="106" src={ `${ process.env.PUBLIC_URL }/assets/images/device.png` } alt="device" />
                            <p>Praesent id enim sit amet odio vulputate eleifend in in tortor. Donec tellus massa, tristique sit amet condim vel, facilisis quis sapien. Praesent id enim sit amet odio vulputate eleifend in in tortor. Donec tellus massa, tristique sit amet condim vel, facilisis quis sapien. Praesent id enim sit amet odio vulputate eleifend in in tortor. Donec tellus massa, tristique sit amet condim vel, facilisis quis sapien.</p>
                        </PtToggle>

                        <PtToggle label="Curabitur eget leo at velit imperdiet vague iaculis vitaes?">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget leo at velit imperdiet varius. In eu ipsum vitae velit congue iaculis vitae at risus. Nullam tortor nunc, bibendum vitae semper a, volutpat eget massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer fringilla, orci sit amet posuere auctor.</p>
                        </PtToggle>

                        <PtToggle label="Curabitur eget leo at velit imperdiet vague iaculis vitaes?">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget leo at velit imperdiet varius. In eu ipsum vitae velit congue iaculis vitae at risus. Nullam tortor nunc, bibendum vitae semper a, volutpat eget massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer fringilla, orci sit amet posuere auctor, orci eros pellentesque odio, nec pellentesque erat ligula nec massa. Aenean consequat lorem ut felis ullamcorper posuere gravida tellus faucibus. Maecenas dolor elit, pulvinar eu vehicula eu, consequat et lacus. Duis et purus ipsum. In auctor mattis ipsum id molestie. Donec risus nulla, fringilla a rhoncus vitae, semper a massa. Vivamus ullamcorper, enim sit amet consequat laoreet, tortor tortor dictum urna, ut egestas urna ipsum nec libero. Nulla justo leo, molestie vel tempor nec, egestas at massa. Aenean pulvinar, felis porttitor iaculis pulvinar, odio orci sodales odio, ac pulvinar felis quam sit.</p>
                        </PtToggle>
                    </div>
                </Col>
            </Row>
        </>
    )
}

export default React.memo( TogglesPage );