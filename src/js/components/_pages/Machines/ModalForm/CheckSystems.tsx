import {
  Checkbox as MCheckbox,
  FormControl as MFormControl,
  FormControlLabel as MFormControlLabel,
  Radio as MRadio,
} from "@material-ui/core"
import { machineSystem, systemData } from "appConfig"
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
const selected = "selected"
const unselected = "unselected"

const CheckSystems = ({ className = "", }: Props) => {
  const dispatch = useDispatch()
  // チェックボックス, ラジオボタン用システム取得
  // const checkRadioSystems = [...useSelector(convertCheckRadioSystems, shallowEqual)]
  const checkRadioSystems = useSelector(convertCheckRadioSystems)

  const radioChange = (targetSystemId: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
    // const nextSystems: systemData[]=[]
    const targetSystem = checkRadioSystems.get(targetSystemId)

    if (targetSystem !== undefined)
      checkRadioSystems.set(targetSystemId, {
        ...targetSystem,
        selected: !targetSystem.main_flg,
        main_flg: !targetSystem.main_flg
      })

    const nextSystems = Array.from(checkRadioSystems.values())
      .filter(v => v.selected)
      .map(v=>{
        return {
          system_id: v.system_id,
          system_name: v.system_name,
          system_en_name: v.system_en_name,
          main_flg: v.main_flg
        } as machineSystem
      })

     dispatch(editDataAction(nextSystems, "systems"))

  }

  const checkboxChange = (targetSystemId: number) => (e: React.ChangeEvent<HTMLInputElement>, checkState: boolean) => {
    console.log(checkState)
    const targetSystem = checkRadioSystems.get(targetSystemId)

    if (targetSystem !== undefined)
      checkRadioSystems.set(targetSystemId, {
        ...targetSystem,
        selected: checkState,
      })

    const nextSystems = Array.from(checkRadioSystems.values())
      .filter(v => v.selected)
      .map(v=>{
        return {
          system_id: v.system_id,
          system_name: v.system_name,
          system_en_name: v.system_en_name,
          main_flg: v.main_flg
        } as machineSystem
      })

     dispatch(editDataAction(nextSystems, "systems"))
  }

  return (
    <MFormControl className={className}>
      {
        Array.from(checkRadioSystems).map(([k, v], i) => {
          return (
            <React.Fragment key={i}>
              <MFormControlLabel value={v.system_id} label="" control={
                <>
                  <MRadio checked={v.main_flg} onChange={radioChange(v.system_id)} className={radio} />
                  <MFormControlLabel
                    className={(v.selected ? selected : unselected)}
                    value={v.system_id}
                    control={
                      <MCheckbox checked={v.selected} onChange={checkboxChange(v.system_id)} className={check} />
                    }
                    label={v.system_name} />
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

    .${selected}{
      color: white;
      background-color:rgb(112, 177, 112);
    }
    
    .${unselected}{
      color: black;
    }
    
    .${unselected}, .${selected}{
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