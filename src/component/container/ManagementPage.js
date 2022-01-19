import { Component } from "react";
import { withRouter } from "react-router-dom";
import styled from 'styled-components';

import Header from "../presentational/organisms/Header";

const ManagementPageBox = styled.div`
`;

const SelectJobBox = styled.div``;

const SelectJobInput = styled.select``;

class ManagementPage extends Component {
    constructor() {
        super();
    }
    render() {
        return(
            <ManagementPageBox>
                {/* ヘッダー */}
                <Header />
                {/* ヘッダー */}

                {/* 管理対象職種選択 */}
                <SelectJobBox>
                    <SelectJobInput>
                        <option>総合職</option>
                    </SelectJobInput>
                </SelectJobBox>
                {/* 管理対象職種選択 */}

            </ManagementPageBox>
        );
    }
}

export default withRouter(ManagementPage);