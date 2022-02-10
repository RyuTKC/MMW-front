import React, { useState, useEffect, } from "react";
import styled from "styled-components";
import MTable from "@material-ui/core/Table";
import MTableBody from "@material-ui/core/TableBody";
import MTableHead from "@material-ui/core/TableHead";
import MTableRow from "@material-ui/core/TableRow";
import MTableCell from "@material-ui/core/TableCell";
import MTablePageNation from "@material-ui/core/TablePagination";
import MTableFooter from "@material-ui/core/TableFooter";
import MTableContainer from "@material-ui/core/TableContainer";
import { RootState } from "reducks/store";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import TitleColumn from "./TitleColumn";
import { pagingAction, setCompanyAction } from "reducks/Companies/action";
import { getCompany, sortCompanyDatas, getCompanies } from "reducks/Companies/operations";
import { CircularProgress as MCircularProgress } from "@material-ui/core";
import FormRecord from "./FormRecord";
import NormalRecord from "./NormalRecord";
import { initialCompanyData } from "appConfig";


type Props = {
  className?: string
}

const MyTable = ({ className }: Props) => {
  // redux hooks
  const dispatch = useDispatch()
  const sortData = [...useSelector((state: RootState) => state.companies.tableData.sortData, shallowEqual)]
  const pageData = { ...useSelector((state: RootState) => state.companies.tableData.pageElement, shallowEqual) }
  const columnData = { ...useSelector((state: RootState) => state.companies.tableData.columnDisplayName, shallowEqual) }
  const editFlg = useSelector((state: RootState) => state.companies.editElement.editFlg)
  const editDataId = useSelector((state: RootState) => state.companies.editElement.data.company_id)

  const paging = (e: unknown, newPage: number) => {
    dispatch(pagingAction(newPage))
    window.scrollTo(0, 0)
  }

  const onClickRecord = (company_id: number) => (e: React.MouseEvent<unknown>) => {
    dispatch(getCompany(company_id))
  }

  const onCompanyNew = () => {
    dispatch(setCompanyAction(initialCompanyData, true))
  }

  // 更新
  useEffect(() => {
    dispatch(getCompanies())
    dispatch(sortCompanyDatas("company_id", false))
  }, []);

  return (
    <>
      <button onClick={onCompanyNew}>新規作成</button>
      <MTableContainer>
        <MTable className={className}>
          <MTableHead>
            <MTableRow>
              <MTablePageNation count={sortData.length} onPageChange={paging} page={pageData.nowPage} rowsPerPage={pageData.recordPerPage} />
            </MTableRow>
            <MTableRow>
              <TitleColumn sortKey={"company_id"}>{columnData.company_id}</TitleColumn>
              <TitleColumn sortKey={"company_name"}>{columnData.company_name}</TitleColumn>
            </MTableRow>
          </MTableHead>
          <MTableBody>
            {editFlg && editDataId < 0
              ? <FormRecord />
              : <></>
            }
            {sortData.slice((pageData.nowPage) * pageData.recordPerPage, (pageData.nowPage + 1) * pageData.recordPerPage).map((v, i) => {
              if (editFlg && editDataId === v.company_id)
                return (
                  <FormRecord key={i} />)
              else
                return (
                  <NormalRecord key={i} company={v} />
                )
            }
            )}
          </MTableBody>
          <MTableFooter>
            <MTableRow>
              <MTablePageNation count={sortData.length} onPageChange={paging} page={pageData.nowPage} rowsPerPage={pageData.recordPerPage} />
            </MTableRow>
          </MTableFooter>
        </MTable>
      </MTableContainer>
    </>
  );
};

export default styled(MyTable)`
  width: 75%;
  color: #42a5f5;
  
  th, td{
    font-size: 12px;
    
  }

  & .tableRow:hover{
    cursor: pointer;
    background-color: rgba(30, 184, 223, 0.176);
  }

   @media (max-width: 640px){
    font-size: 32px;
    color: #444444;
  }
  @media print{
    font-size: 32px;
    color: #444444;
  
}
`