import {
  Checkbox as MCheckbox,
  FormControl as MFormControl,
  FormControlLabel as MFormControlLabel,
  Radio as MRadio,
} from "@material-ui/core"
import React, { useEffect, useState } from "react"
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import { editDataAction } from "reducks/Machines/action"
import { convertCheckRadioSystems } from "reducks/Machines/selectors"
import styled from "styled-components"

type Props = {
  className?: string
}

const radio = "radio"
const check = "check"
const used = "used"
const unused = "unused"

const CheckSystems = ({ className = "", }: Props) => {
  const dispatch = useDispatch()
  // チェックボックス, ラジオボタン用システム取得
  const checkRadioSystems = [...useSelector(convertCheckRadioSystems, shallowEqual)]

  const radioChange = (targetSystemId: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const nextMainSystemId = targetSystemId
    const nextSystems = [...checkRadioSystems]
      .map(v => {
        v.main_flg = false
        return v
      })
      .map(v => {
        if (v.system_id === nextMainSystemId) {
          v.main_flg = true
          v.used = true
        }
        return v
      })
      .filter(v => v.used)
      .map(v => {
        return {
          system_id: v.system_id,
          system_name: v.system_name,
          system_en_name: v.system_en_name,
          main_flg: v.main_flg
        }
      })

    dispatch(editDataAction(nextSystems, "systems"))

  }
  
  const checkboxChange = (targetSystemId: number) => (e: React.ChangeEvent<HTMLInputElement>, checkState: boolean) => {
    checkBoxJudge(targetSystemId, checkState)
  }

  const labelClick = (targetSystemId: number, checkState: boolean) => (e: React.MouseEvent<HTMLElement>) => {
    checkBoxJudge(targetSystemId, checkState)
    // イベント伝搬停止
    e.preventDefault()
  }

  const checkBoxJudge = (targetSystemId: number, nextCheckState: boolean) => {
    const nextSystems = checkRadioSystems
      .map(v => {
        if (v.system_id === targetSystemId) {
          v.used = nextCheckState
          if (!nextCheckState)
            v.main_flg = false
        }
        return v
      })
      .filter(v => v.used)
      .map(v => {
        return {
          system_id: v.system_id,
          system_name: v.system_name,
          system_en_name: v.system_en_name,
          main_flg: v.main_flg
        }
      })

    dispatch(editDataAction(nextSystems, "systems"))
  }

  return (
    <MFormControl className={className}>
      {
        checkRadioSystems.map((v, i) => {
          return (
            <React.Fragment key={i}>
              <MFormControlLabel value={v.system_id} label="" control={
                <>
                  <MRadio checked={v.main_flg} onChange={radioChange(v.system_id)} className={radio} />
                  <MFormControlLabel
                    className={(v.used ? used : unused)}
                    value={v.system_id}
                    control={
                      <MCheckbox checked={v.used} onChange={checkboxChange(v.system_id)} className={check} />
                    }
                    label={v.system_name} onClick={labelClick(v.system_id, !v.used)} />
                </>
              } />
            </React.Fragment>
          )
        })
      }
    </MFormControl>
  )
}

export default styled(CheckSystems)`
&&&&{
    display: block;

    .${used}{
      color: white;
      background-color:rgb(112, 177, 112);
    }
    
    .${unused}{
      color: black;
    }
    
    .${unused}, .${used}{
      float: left;
      border: solid 1px;
      border-color: rgb(112, 177, 112);
      border-radius: 10px;
      margin: 1px;
      padding: 0px 5px;
      transition: all 0.5s 0s cubic-bezier(.16,.64,.83,.67)
    }

     .${check}{
      display: none;
      margin: 0;
      padding: 0;
      float: left;
    }
  }
`